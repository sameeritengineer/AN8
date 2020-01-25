import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children:
    [
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'',
        component:DashboardComponent,
        pathMatch:'full'
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(mod => mod.UsersModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('../employees/employees.module').then(mod => mod.EmployeesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
