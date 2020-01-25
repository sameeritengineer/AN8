import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from '../shared/employee.service';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [EmployeeComponent,EmployeesComponent, IndexComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
})
export class EmployeesModule { }
