import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path: '', component: UsersComponent, children:
    [
      {
        path:'create',
        component:CreateComponent
      },
      {
        path:'edit',
        component:EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
