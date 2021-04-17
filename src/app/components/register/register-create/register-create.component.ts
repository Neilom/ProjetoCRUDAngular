import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../register.service'
import { Router } from '@angular/router'
import { Register } from '../register.model';

@Component({
  selector: 'app-register-create',
  templateUrl: './register-create.component.html',
  styleUrls: ['./register-create.component.css']
})
export class RegisterCreateComponent implements OnInit {

  register: Register = {
    name: "",
    sexo: "",
    data_nascimento: 0,
    estado_civil: ""
  }

  constructor(private registerService: RegisterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createRegister(): void {
    this.registerService.create(this.register).subscribe(() => {
      this.registerService.showMessage('Cadastro realizado!')
      this.router.navigate(['/register'])

    })
  }

  cancel(): void {
    this.router.navigate(['/register'])
  }

}
