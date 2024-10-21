import { Component, inject, OnInit } from '@angular/core';
import { FakestoreService } from '../servicios/fakestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  fakeStoreService = inject(FakestoreService)
  personajes: any[] = [];
  constructor() {}

  ngOnInit() {
    //Se cambia personajes por data en subscribe() y se agrega tipado :any
    this.fakeStoreService.obtenerPersonaje().subscribe((data: any)=>{
      console.log(data);
      this.personajes = data.items; //La respuesta de la api es un objeto con varias clave:valor. la clave items constiene los personajes.
    })
    
  }

}
