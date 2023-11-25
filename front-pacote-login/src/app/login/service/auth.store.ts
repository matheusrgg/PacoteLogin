import { Inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject, } from 'rxjs'

import { HttpClient } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AdminInterface } from '../interfaces/admin.interface';

@Injectable({
    providedIn: 'root'
})

export class AuthStore {

    private subject = new BehaviorSubject<any>(null);

    user$: Observable<any> = this.subject.asObservable();
    private encodedToken: string | null = null;

    isLoggedIn$: Observable<boolean>
    isLoggedOut$: Observable<boolean>
    private readonly tokenKey = 'authToken';
    constructor(

        public http: HttpClient,
    ) {

        this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));


    }

    login(credentials: AdminInterface): Observable<any> {
        const url = 'http://localhost:4000/admin/login';
        return this.http.post<any>(url, credentials

        ).pipe(
            tap(user => this.subject.next(user)),
            shareReplay()
        )
    }

    logout() {
        this.subject.next(null)
    }

    public setToken(encodedToken: string): void {
        this.encodedToken = encodedToken;
        sessionStorage.setItem(this.tokenKey, encodedToken);
    }
    public removeToken(): void {
        this.encodedToken = null;
        sessionStorage.removeItem(this.tokenKey);
    }


}