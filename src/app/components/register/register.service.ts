import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Register } from './register.model';


/*Nesse arquivo estão listados todos os serviços da aplicação
 no caso o CRUD ncessário para a aplicação rodar */

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //URL gerado pelo JSON-server
  baseUrl = "http://localhost:3001/register"


  //Mensagem que aparecerá no canto superior 
  //direito da tela, com o intuito de informar o sucesso da operação
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  //Metodo para criar um registro no banco de dados
  create(registe: Register): Observable<Register> {
    return this.http.post<Register>(this.baseUrl, registe)
  }
  //Metodo para ler um registro no banco de dados
  read(): Observable<Register[]> {
    return this.http.get<Register[]>(this.baseUrl)
  }
  // metodo para ler um registro a partir de um ID no banco de dados
  readById(id: string): Observable<Register> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Register>(url)
  }
  // metodo para alterar um registro no banco de dados
  update(register: Register): Observable<Register> {
    const url = `${this.baseUrl}/${register.id}`
    return this.http.put<Register>(url, register)
  }

  //Metodo para deletar registro no banco de dados
  delete(id: string): Observable<Register> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Register>(url)
  }
}
