import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscardorComponent } from './buscardor/buscardor.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HeroesComponent
      },
      {
        path: 'buscar/:termino',
        component: BuscardorComponent
      },
      {
        path: 'heroe/:id',
        component: HeroeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
