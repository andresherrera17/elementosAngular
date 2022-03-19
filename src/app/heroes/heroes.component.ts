import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IHeroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];
  formHeroes: FormGroup = new FormGroup({});

  constructor(
    private _serviceHeroes: HeroesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this._serviceHeroes.getHeroes();
  }

  buildForm() {
    this.formHeroes = this.formBuilder.group({
      nombre: '',
      bio: '',
      aparicion: '',
      casa: ''
    })
  }

  guardarHeroe() {

  }

}
