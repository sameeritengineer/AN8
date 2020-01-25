import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [UsersComponent, CreateComponent, IndexComponent, EditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialComponentsModule
  ]
})
export class UsersModule { }
