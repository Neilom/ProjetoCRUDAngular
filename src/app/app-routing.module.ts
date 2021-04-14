import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCreateComponent } from './components/register/register-create/register-create.component';

import { HomeComponent } from './view/home/home.component'
import { RegisterCrudComponent } from './view/register-crud/register-crud.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "register",
  component: RegisterCrudComponent
},{
  path: "register/create",
  component: RegisterCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
