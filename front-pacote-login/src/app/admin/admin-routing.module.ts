import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'form/:id', component: FormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
