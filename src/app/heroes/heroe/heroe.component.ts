import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: IHeroe = {} as IHeroe;

  constructor(
    private activateRouter: ActivatedRoute,
    private _serviceHeroes: HeroesService
  ) {
    this.activateRouter.params.subscribe(params => {
      let heroeFind = this._serviceHeroes.getHeroeById(params['id']);
      if (heroeFind) {
        this.heroe = heroeFind;
      }
    })

  }

  ngOnInit(): void {
  }

}
