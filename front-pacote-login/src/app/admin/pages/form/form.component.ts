

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStore } from 'src/app/login/service/auth.store';
import { FornecedorService } from 'src/app/admin/services/fornecedor.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  idRota: number;
  isFormularioCompleto: boolean = false;
  isFormularioAlterado: boolean = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthStore,
    private route: ActivatedRoute,
    private fornecedorService: FornecedorService

  ) { }

  fornecedorForm: FormGroup = new FormGroup({});

  ngOnInit() {

    this.fornecedorForm = this.formBuilder.group({
      nomeComercial: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cnpj: ['', [Validators.required, Validators.minLength(5)]],
      endereco: ['', Validators.required],
      logotipo: [''],
    });

    this.fornecedorForm.valueChanges.subscribe(() => {
      this.isFormularioCompleto = this.fornecedorForm.valid;
      this.isFormularioAlterado = true;
      console.log('Formulário alterado');
    });

    this.carregarIdRota()

  }

  onSubmit() {
    if (this.fornecedorForm.valid) {
      if (!this.idRota) {
        this.createFornecedor()

      } else {
        this.editFornecedor()
      }
    }
  }

  onBack() {
    this.router.navigate(["/admin/table"])
  }

  carregarIdRota() {
    this.route.paramMap.subscribe((params: any) => {
      this.idRota = params.get('id')
      this.patchFormEdit()
    });
  }



  patchFormEdit() {
    this.fornecedorService.mapFornecedorGetId(this.idRota).subscribe((data) => {
      this.fornecedorForm.patchValue(data);
      this.fornecedorForm.updateValueAndValidity()
    });
  }

  createFornecedor() {
    const val = this.fornecedorForm.value
    const obj = {
      nomeComercial: val.nomeComercial,
      razaoSocial: val.razaoSocial,
      email: val.email,
      logoTipo: val.logotipo,
      cnpj: val.cnpj,
      endereco: val.endereco
    }

    this.fornecedorService.createFornecedor(obj)
      .subscribe({
        next: (res) => {
          this.router.navigate(["/admin/table"])
        },
        error: () => {

          alert("Login Failed!")
        }
      })
  }

  editFornecedor() {
    const val = this.fornecedorForm.value
    this.fornecedorService.editFornecedor
      (
        this.idRota,
        val.nomeComercial,
        val.razaoSocial,
        val.email,
        val.logotipo,
        val.cnpj,
        val.endereco)
      .subscribe({
        next: (res) => {
          this.router.navigate(["/admin/table"])
        },
        error: () => {

          alert("Login Failed!")
        }
      })
  }

  isSubmitDisabled() {
    console.log('Checando formualrio alterado', this.isFormularioAlterado);
    debugger
    return !this.isFormularioAlterado || !this.isFormularioCompleto;
  }

}