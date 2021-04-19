import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';


@Component({
  selector: 'app-register-crud',
  templateUrl: './register-crud.component.html',
  styleUrls: ['./register-crud.component.css']
})
export class RegisterCrudComponent implements OnInit {

  constructor( private router: Router, private headerService: HeaderService) {
    headerService.headerData ={
      title: 'Cadastro',
      icon:'app_registration',
      routerUrl: '/register'
    }
   }

  ngOnInit(): void {
    
  }

  navigateToRegisterCreate(): void {
    this.router.navigate(['register/create'])
  }

}
