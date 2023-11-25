import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";
import { Observable, Subject, takeUntil, map, BehaviorSubject, filter } from "rxjs";
import { FornecedorInterface } from "../interfaces/fornecedor.interface";

@Injectable({
    providedIn: 'root'
})
export class FornecedorService {


    private tableSubject$ = new BehaviorSubject<any>([]);

    private getUnsubsribe$ = new Subject<void>();
    private deleteUnsubsribe$ = new Subject<void>();
    private fornecedorObservable$ = new Subject<void>();

    constructor(
        public http: HttpClient,
    ) {

    }

    //fonte de verdade
    public setTable(value: any) {
        this.tableSubject$.next(value);
    }

    public get table$() {
        return this.tableSubject$.asObservable();
    }

    public mapFornecedorGetId(id: number): Observable<Array<any>> {
        return this.tableSubject$.asObservable().pipe(
            map((data) => {
                console.log("dentri di componenentnntnt", data);
                const meuIdIndex = data.findIndex((elemento: any) => {
                    return elemento.id == id
                })
                return data[meuIdIndex]
            }
            ),
        )
    }




    public createFornecedor(obj: FornecedorInterface): Observable<any[]> {
        return this.http.post<any>('http://localhost:4000/fornecedor/create', obj)
    }


    public editFornecedor(
        id,
        nomeComercial,
        razaoSocial,
        email,
        endereco,
        cnpj,
        logoTipo

    ): Observable<any[]> {
        return this.http.put<any>(`http://localhost:4000/fornecedor/update/${id}`, {
            email: email,
            nomeComercial: nomeComercial,
            razaoSocial: razaoSocial,
            cnpj: cnpj,
            endereco: endereco,
            logoTipo: "1"
        })

    }


    public getFornecedor(): void {
        this.getUnsubsribe$.next()
        const request$ = this.http.get<any[]>('http://localhost:4000/fornecedor/list')
        request$
            .pipe(takeUntil(this.getUnsubsribe$))
            .subscribe((data) => {
                this.setTable(data)
            })
    }

    public deleteFornecedor(id: number): void {
        this.deleteUnsubsribe$.next()
        const request$ = this.http.delete<any[]>(`http://localhost:4000/fornecedor/delete/${id}`);
        request$
            .pipe(takeUntil(this.deleteUnsubsribe$))
            .subscribe((data) => {
                this.getFornecedor()
            })
    }


    public updateFornecedor(id, email, nome, cnpj, descricao): Observable<any[]> {
        return this.http.put<any>(`http://localhost:4000/fornecedor/update/${id}`, {
            email: email,
            nome: nome,
            cnpj: cnpj,
            descricao: descricao
        })
    }

}