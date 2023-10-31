
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Observable, tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  fornecedores$: Observable<any[]>

  constructor(
    public router: Router,
    private loginService: LoginService,
    private fornecedorSerivce: FornecedorService
  ) { }

  ngOnInit(): void {
    this.fornecedorSerivce.getFornecedor()
    this.fornecedores$ = this.fornecedorSerivce.table$
  }

  onLogout() {
    this.loginService.removeToken();
    this.router.navigate(["/login/auth"])
  }

  onCreate() {
    this.router.navigate(["/admin/form"])
  }

  onDelete(id: any) {
    this.fornecedorSerivce.deleteFornecedor(id)
  }

  onEdit(id: any) {
    this.router.navigate(["/admin/form", id])
  }
}
