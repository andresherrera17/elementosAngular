import { Injectable } from '@angular/core';
import { IHeroe } from '../interfaces/heroe.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // private heroes: IHeroe[] = [
  //   {
  //     nombre: 'Aquaman',
  //     bio: 'El mas poderoso del mar',
  //     img: 'assets/img/aquaman.png',
  //     aparicion: '1941-11-01',
  //     casa: 'DC'
  //   },
  //   {
  //     nombre: 'Batman',
  //     bio: 'No tiene ningun poder',
  //     img: 'assets/img/batman.png',
  //     aparicion: '1939-11-01',
  //     casa: 'DC'
  //   },
  //   {
  //     nombre: 'Darevil',
  //     bio: 'Perdio la vista',
  //     img: 'assets/img/daredevil.png',
  //     aparicion: '1850-11-01',
  //     casa: 'Marvel'
  //   },
  //   {
  //     nombre: 'Hulk',
  //     bio: 'El mas fuerte',
  //     img: 'assets/img/hulk.png',
  //     aparicion: '1985-11-01',
  //     casa: 'Marvel'
  //   }
  // ]

  // Observable tiene un tiempo de vida ilimitado
  // Promesa si yo ejecuto el then se acabo

  private heroes$: Subject<IHeroe[]>;
  private heroes: IHeroe[] = [];

  constructor() {
    this.heroes$ = new Subject();
  }

  getHeroes(): Observable<IHeroe[]> {
    return this.heroes$.asObservable();
  }

  agregarHeroes(heroe: IHeroe) {
    this.heroes.push(heroe);
    this.heroes$.next(this.heroes);
  }

  delete() {
    this.heroes.unshift();
    this.heroes$.next(this.heroes);
  }
}
