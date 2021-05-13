import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Pessoa } from '../register/register.model';
import api from "./api"


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private snackBar: MatSnackBar) { }



  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 10000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }


  create(pessoa: Pessoa): Promise<Pessoa> {
    return api.post('/pessoa', pessoa);
  }

  read() {
    return api.get("/pessoa");
  }

  readById(id: string) {
    return api.get(`/pessoa/${id}`);
  }

  update(pessoa: Pessoa): Promise<Pessoa> {
    return api.patch(`/pessoa/${pessoa.id}`, pessoa);
  }

  async delete(id: string): Promise<any> {
    try {
      return await api.delete(`/pessoa/${id}`);
    } catch (error) {
      console.log("aqui")
      console.log(error)
      return error.response
    }
  }
}
