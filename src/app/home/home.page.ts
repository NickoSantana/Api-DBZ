import { Component, inject, OnInit } from '@angular/core';
import { FakestoreService } from '../servicios/fakestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  fakeStoreService = inject(FakestoreService)
  personajes: any[] = []
  constructor() {}

  ngOnInit() {
    this.fakeStoreService.obtenerPersonaje().subscribe((personajes)=>{
      console.log(personajes);
      this.personajes = personajes;
    })
    
  }

}
