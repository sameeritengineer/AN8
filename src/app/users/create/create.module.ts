import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateModule { }
