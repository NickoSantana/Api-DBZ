import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {
  httpClient = inject(HttpClient);
  private url = 'https://www.dragonball-api.com/api'
  constructor() { }
  obtenerPersonaje(){
    return this.httpClient.get<any[]>(this.url,

    );
  }
}
