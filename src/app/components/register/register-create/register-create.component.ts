import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service'
import { Router } from '@angular/router'
import { Pessoa } from '../register.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
const moment = require('moment')



@Component({
  selector: 'app-register-create',
  templateUrl: './register-create.component.html',
  styleUrls: ['./register-create.component.css']
})
export class RegisterCreateComponent implements OnInit {
  
  pessoa: Pessoa = {
    name: '',
    birth_date: '',
    civil_state: '',
    sex: ''
  }

  cadastroFrom!: FormGroup;

  props = {
    texto: 'Adicionar',
    cor: 'azul',
    editavel: true

  }

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.cadastroFrom = new FormGroup({
      name: new FormControl(this.pessoa.name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      birth_date: new FormControl(this.pessoa.birth_date, [
        Validators.required
      ]),
      civil_state: new FormControl(this.pessoa.civil_state,[
        Validators.required
      ]),
      sex: new FormControl(this.pessoa.sex, [
        Validators.required
      ])
    })
  }

  get name() { return this.cadastroFrom.get('name'); }

  get birth_date() { return this.cadastroFrom.get('birth_date'); }

  get civil_state() { return this.cadastroFrom.get('civil_state'); }

  get sex() { return this.cadastroFrom.get('sex'); }


  
  diasParaAniversario(month: number, day: number) {
    var tday = new Date(), y = tday.getFullYear(), next = new Date(y, month - 1, day);

    tday.setHours(0, 0, 0, 0);

    if (tday > next) next.setFullYear(y + 1);

    return Math.round((+next - +tday) / 8.64e7);
  }

  createRegister(): void {
    var now = moment()
    var nascimento = moment(this.pessoa.birth_date)
    var age = Math.floor(now.diff(nascimento, 'years', true));

    var diaNiver = nascimento.get("date")
    var mesNiver = nascimento.get("month") + 1

    var diasAniversario = this.diasParaAniversario(mesNiver, diaNiver)

    this.registerService.create(this.pessoa).then(() => {

      if (diasAniversario == 0) {
        this.registerService.showMessage('Parabéns pelo seu aniversário!')
        this.router.navigate(['/register'])
      } else {
        this.registerService.showMessage(`Cadastro realizado com sucesso! Você tem ${age} anos e falta ${diasAniversario} para seu aniversário!`)
        this.router.navigate(['/register'])
      }


    })
  }

  cancel(): void {
    this.router.navigate(['/register'])
  }

}
