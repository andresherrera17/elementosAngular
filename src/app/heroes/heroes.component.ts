import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(private _serviceHeroes: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this._serviceHeroes.getHeroes();
  }

}
