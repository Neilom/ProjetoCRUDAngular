import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import axios from 'axios';
import { Andress } from '../../../modal/andress.model';

@Component({
  selector: 'app-add-andress',
  templateUrl: './add-andress.component.html',
  styleUrls: ['./add-andress.component.css']
})
export class AddAndressComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Andress,
  ) { }

  andress: Andress = {
    cep: '',
    city: '',
    complement: '',
    street: '',
    num: null,
    pessoa: 0,
    state: '',
    id: 0
  }

  enderecoForm!: FormGroup



  onChange() {
    if (this.enderecoForm.get("cep")?.value != '') {
      axios.get(`//viacep.com.br/ws/${this.enderecoForm.get("cep")?.value}/json/`).then(result => {
        this.enderecoForm.setValue({
          cep: result.data.cep,
          street: result.data.logradouro,
          num: '',
          complement: '',
          state: result.data.uf,
          city: result.data.localidade
        })
      })
    }
  }




  ngOnInit(): void {

    this.enderecoForm = new FormGroup({
      cep: new FormControl(this.andress.cep, [
        Validators.required
      ]),
      street: new FormControl(this.andress.street, [
        Validators.required
      ]),
      num: new FormControl(this.andress.num, [
        Validators.required
      ]),
      complement: new FormControl(this.andress.complement, [
        Validators.required
      ]),
      state: new FormControl(this.andress.state, [
        Validators.required
      ]),
      city: new FormControl(this.andress.city, [
        Validators.required
      ])
    })
  }

  get cep() { return this.enderecoForm.get('cep'); }
  get street() { return this.enderecoForm.get('street'); }
  get num() { return this.enderecoForm.get('num'); }
  get complement() { return this.enderecoForm.get('complement'); }
  get state() { return this.enderecoForm.get('state'); }
  get city() { return this.enderecoForm.get('city'); }

}
