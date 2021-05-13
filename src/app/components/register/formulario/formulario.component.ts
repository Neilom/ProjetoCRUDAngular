import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { Pessoa } from '../register.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pessoa: Pessoa = {
    name: '',
    birth_date: '',
    civil_state: '',
    sex: ''
  }

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!

    if (id) {
      await this.registerService.readById(id).then(register => {
        this.pessoa = register.data
      })
    }

    

  }

  @Input('item') props!: any;

  @Output() respostaPessoa = new EventEmitter();

  descubra() {
    this.respostaPessoa.emit(this.pessoa)
  }

  cancel(): void {
    this.router.navigate(['/register'])
  }
}
