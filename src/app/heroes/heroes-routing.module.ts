import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscardorComponent } from './buscardor/buscardor.component';
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
        component: HeroesComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
