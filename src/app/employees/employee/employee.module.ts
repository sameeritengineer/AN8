import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';
import { EmployeeService } from 'src/app/shared/employee.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponentsModule,
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
