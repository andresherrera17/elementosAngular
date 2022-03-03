import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { TextoComponent } from './texto/texto.component';

const routes: Routes = [
  { path: 'pipes', component: EjemplosPipesComponent },
  { path: 'texto', component: TextoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'texto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
