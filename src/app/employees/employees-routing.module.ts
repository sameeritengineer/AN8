import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', component: EmployeesComponent, children:
    [
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'',
        component:IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
