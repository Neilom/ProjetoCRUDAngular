import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  register: Register = {
    name: "",
    sexo: "",
    data_nascimento: "",
    estado_civil: ""
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.registerService.readById(id).subscribe(register => {
      this.register = register
    })
  }

  updateRegister(): void {
    this.registerService.update(this.register).subscribe(() => {
      this.registerService.showMessage('Registro atualizado com sucesso!')
      this.router.navigate(['/register'])
    })
  }

  cancel(): void {
    this.router.navigate(['/register'])
  }
}
