import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = "http://localhost:3001/register"

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  create(registe: Register):Observable<Register> {
    return this.http.post<Register>(this.baseUrl, registe)
  }

  read(): Observable<Register[]> {
    return this.http.get<Register[]>(this.baseUrl)
  }
}
