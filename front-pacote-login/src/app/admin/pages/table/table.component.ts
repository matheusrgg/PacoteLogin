
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FornecedorService } from 'src/app/admin/services/fornecedor.service';
import { Observable, tap } from 'rxjs';
import { AuthStore } from 'src/app/login/service/auth.store';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  fornecedores$: Observable<any[]>

  constructor(
    public router: Router,
    private loginService: AuthStore,
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
