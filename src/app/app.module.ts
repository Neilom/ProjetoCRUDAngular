import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterCreateComponent } from './components/register/register-create/register-create.component';
import { RegisterDeleteComponent } from './components/register/register-delete/register-delete.component';
import { AndressTableComponent } from './components/register/register-read/andress-table/andress-table.component';
import { AddAndressComponent } from './components/register/register-read/andress/add-andress/add-andress.component';
import { AndressComponent } from './components/register/register-read/andress/andress.component';
import { RegisterReadComponent } from './components/register/register-read/register-read.component';
import { RegisterUpdateComponent } from './components/register/register-update/register-update.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { RegisterCrudComponent } from './view/register-crud/register-crud.component';
import { FormularioComponent } from './components/register/formulario/formulario.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RegisterCrudComponent,
    RegisterCreateComponent,
    RegisterReadComponent,
    RegisterUpdateComponent,
    RegisterDeleteComponent,
    AndressComponent,
    AndressTableComponent,
    AddAndressComponent,
    FormularioComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    NgxMaskModule.forRoot(maskConfigFunction),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
