import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {
  httpClient = inject(HttpClient);
  private url = 'https://dragonball-api.com/api/characters'; //Correcion de direccion: era sin www., y se agregó /characters al final
  constructor() { }
  obtenerPersonaje(){
    return this.httpClient.get<any[]>(this.url);
  }
}
