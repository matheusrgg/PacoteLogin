import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from 'src/app/services/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router'
import { FornecedorService } from 'src/app/admin/services/fornecedor.service';

fdescribe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let router: Router;
  let fornecedorService: FornecedorService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LoginService, FornecedorService],
      declarations: [TableComponent]
    })
      .compileComponents();
    router = TestBed.inject(Router); // Inject the Router
    fornecedorService = TestBed.inject(FornecedorService); // Inject the FornecedorService
    spyOn(fornecedorService, 'deleteFornecedor'); // Spy on the deleteFornecedor method
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/adkin/form" on creation', () => {
    spyOn(router, 'navigate'); // Spy on the router's navigate method
    component.onCreate();
    expect(router.navigate).toHaveBeenCalledWith(['/admin/form']);
  })

  it('should call deleteFornecedor method from FornecedorService', () => {
    const id = 1; // Provide an example ID
    component.onDelete(id);
    expect(fornecedorService.deleteFornecedor).toHaveBeenCalledWith(id); // Check if deleteFornecedor method is called with the expected ID
  });


});
