import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-delete',
  templateUrl: './register-delete.component.html',
  styleUrls: ['./register-delete.component.css']
})
export class RegisterDeleteComponent implements OnInit {


  register: Register = {
    name: "",
    sexo: "",
    data_nascimento: "",
    estado_civil: ""
  }


  constructor(private registerService: RegisterService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.registerService.readById(id).subscribe(register => {
      this.register = register
    })
  }

  deleteRegister() {
    this.registerService.delete(`${this.register.id}`).subscribe(() => {
      this.registerService.showMessage('Cadastro deletado com sucesso')
      this.router.navigate(['/register'])
    })
  }
  cancel(): void {
    this.router.navigate(['/register'])
  }

}
