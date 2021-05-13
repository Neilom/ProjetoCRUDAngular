import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../register.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register-read',
  templateUrl: './register-read.component.html',
  styleUrls: ['./register-read.component.css']
})
export class RegisterReadComponent implements OnInit {

  pessoas!: Pessoa[];

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.registerService.read().then(registers => {
      this.pessoas = registers.data
    })
  }
  displayedColumns = [
    "action",
    "name",
    "sex",
    "birth_date",
    "civil_state"
  ]
}
