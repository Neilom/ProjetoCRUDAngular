import { Injectable } from '@angular/core';
import { Andress } from '../register/modal/andress.model';
import api from './api';

@Injectable({
  providedIn: 'root'
})
export class AndressService {

  constructor() { }

  create(andress: Andress): Promise<Andress> {
    return api.post('/andress', andress)
  }

  read(id?: number) {
    return api.get("/andress",
      {
        params: {
          pessoa: id
        }
      })
  }

  readById(id: number) {
    return api.get(`/andress/${id}`)
  }

  update(andress: Andress): Promise<Andress> {
    return api.patch(`/andress/${andress.id}`, andress)
  }

  delete(id: number): Promise<Andress> {
    return api.delete(`/andress/${id}`)
  }
}
