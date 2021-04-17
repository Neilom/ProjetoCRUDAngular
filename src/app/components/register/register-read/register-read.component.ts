import { Component, OnInit } from '@angular/core';
import { Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-read',
  templateUrl: './register-read.component.html',
  styleUrls: ['./register-read.component.css']
})
export class RegisterReadComponent implements OnInit {

  registers!: Register[];
  displayedColumns = ['action', 'name', 'sexo', "data_nascimento", "estado_civil" ]

  constructor(private registerService: RegisterService ) { }

  ngOnInit(): void {
    this.registerService.read().subscribe(registers => {
      this.registers = registers
    })
  }

}
