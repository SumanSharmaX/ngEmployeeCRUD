import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { ListEmployeeComponent } from './Components/list-employee/list-employee.component';

const routes: Routes = [
  {path:'EmployeeList',component:ListEmployeeComponent},
  {path:'CreateEmployee',component:CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
