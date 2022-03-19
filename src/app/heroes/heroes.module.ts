import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { BuscardorComponent } from './buscardor/buscardor.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { HeroesService } from '../services/heroes.service';
import { PaisService } from '../services/pais.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesComponent,
    BuscardorComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HeroesService,
    PaisService
  ]
})
export class HeroesModule { }
