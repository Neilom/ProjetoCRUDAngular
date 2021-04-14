import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register-crud',
  templateUrl: './register-crud.component.html',
  styleUrls: ['./register-crud.component.css']
})
export class RegisterCrudComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRegisterCreate(): void {
    this.router.navigate(['register/create'])
  }

}
