import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../register.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register-delete',
  templateUrl: './register-delete.component.html',
  styleUrls: ['./register-delete.component.css']
})
export class RegisterDeleteComponent implements OnInit {

  props = {
    texto: 'Deletar',
    cor: 'red',
    editavel: false
  }


  constructor(
    private registerService: RegisterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!
    return  id
  }

  recebePessoa(resposta: any) {
    this.deleteRegister()
  }

  deleteRegister() {
    this.registerService.delete(this.ngOnInit()).then(result => {
      console.log(result)
      if(result.status == 200){
        this.registerService.showMessage('Cadastro deletado com sucesso!')
        this.router.navigate(['/register'])
      } else {
        this.registerService.showMessage(`Erro: ${result.status} - ${result.data.message}`)

      }

    })
  }
  cancel(): void {
    this.router.navigate(['/register'])
  }

}
