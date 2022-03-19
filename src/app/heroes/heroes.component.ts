import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
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
    this.buildForm();
    this.getHeroes();
  }

  getHeroes() {
    this._serviceHeroes.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  buildForm() {
    this.formHeroes = this.formBuilder.group({
      nombre: '',
      bio: '',
      aparicion: '',
      casa: '',
      imagen: ''
    })
  }

  guardarHeroe() {
    let heroe: IHeroe = {
      nombre: this.nombre?.value,
      bio: this.bio?.value,
      aparicion: this.aparicion?.value,
      casa: this.casa?.value,
      img: `assets/img/${this.nombre?.value}.png`
    }
    this._serviceHeroes.agregarHeroes(heroe);
  }

  get nombre(): AbstractControl | null { return this.formHeroes.get('nombre') };
  get bio(): AbstractControl | null { return this.formHeroes.get('bio') };
  get aparicion(): AbstractControl | null { return this.formHeroes.get('aparicion') };
  get casa(): AbstractControl | null { return this.formHeroes.get('casa') };
}
