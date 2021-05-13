import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../register.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {

  props = {
    texto: 'Atualizar',
    cor: 'azul',
    editavel: true

  }
  constructor(
    private registerService: RegisterService,
    private router: Router,
  ) { }


  pessoa!: Pessoa

  operacao!: string

  ngOnInit() {
  }

  recebePessoa(resposta: any) {
    this.pessoa = resposta
    this.updateRegister()
  }



  updateRegister(): void {
    this.registerService.update(this.pessoa).then(() => {
      this.registerService.showMessage('Registro atualizado com sucesso!')
      this.router.navigate(['/register'])
    })
  }


  cancel(): void {
    this.router.navigate(['/register'])
  }
}
