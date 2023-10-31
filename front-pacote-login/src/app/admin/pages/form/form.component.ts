

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStore } from 'src/app/services/auth.store';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  id: number;



  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthStore,
    private route: ActivatedRoute,
    private fornecedorService: FornecedorService

  ) { }

  fornecedorForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.carregarIdRota()

    this.fornecedorService.mapFornecedorGetIdTentaiva2(this.id).subscribe((data) => {


      console.log("acessando o getByID Tentativa 2 DENTROO DO COMPONENT", data);
    })

    this.fornecedorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cnpj: ['', [Validators.required, Validators.minLength(5)]],
      descricao: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.fornecedorForm.value);
    if (this.fornecedorForm.valid) {
      const val = this.fornecedorForm.value
      this.fornecedorService.createFornecedor(val.email, val.nome, val.cnpj, val.descricao)
        .subscribe({
          next: (res) => {
            this.router.navigate(["/admin/table"])
          },
          error: () => {

            alert("Login Failed!")
          }
        })
    }
  }

  onBack() {
    this.router.navigate(["/admin/table"])
  }

  carregarIdRota() {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id')
      console.log("id  vindoo da rottaa", this.id);
    });
  }







}