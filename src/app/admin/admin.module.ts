import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialComponentsModule
  ]
})
export class AdminModule { }
