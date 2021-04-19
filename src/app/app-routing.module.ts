import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component'
import { RegisterCrudComponent } from './view/register-crud/register-crud.component'
import { RegisterCreateComponent } from './components/register/register-create/register-create.component';
import { RegisterUpdateComponent } from './components/register/register-update/register-update.component';
import { RegisterDeleteComponent } from './components/register/register-delete/register-delete.component';

/* Neste arquivo estão as rotas da aplicação
As diferentes telas da aplicação são chamados a partir daqui.

O 'path' é a indicação de qual caminho no browser que a rota vai tomar  
O 'component' é o componente que essa rota vai chamar*/

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "register",
  component: RegisterCrudComponent
},{
  path: "register/create",
  component: RegisterCreateComponent
},{
  path: "register/update/:id",
  component: RegisterUpdateComponent
},{
  path: "register/delete/:id",
  component: RegisterDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
