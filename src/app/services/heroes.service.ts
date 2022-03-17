import { Injectable } from '@angular/core';
import { IHeroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: IHeroe[] = [
    {
      nombre: 'Aquaman',
      bio: 'El mas poderoso del mar',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC'
    },
    {
      nombre: 'Batman',
      bio: 'No tiene ningun poder',
      img: 'assets/img/batman.png',
      aparicion: '1939-11-01',
      casa: 'DC'
    },
    {
      nombre: 'Darevil',
      bio: 'Perdio la vista',
      img: 'assets/img/daredevil.png',
      aparicion: '1850-11-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Hulk',
      bio: 'El mas fuerte',
      img: 'assets/img/hulk.png',
      aparicion: '1985-11-01',
      casa: 'Marvel'
    }
  ]

  constructor() { }
}
