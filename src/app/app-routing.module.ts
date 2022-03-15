import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { FormularioNgmodelComponent } from './formulario/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './formulario/formulario-reactivos/formulario-reactivos.component';
import { TextoComponent } from './texto/texto.component';

const routes: Routes = [
  { path: 'pipes', component: EjemplosPipesComponent },
  { path: 'texto', component: TextoComponent },
  { path: 'formulario/ngmodel', component: FormularioNgmodelComponent },
  { path: 'formulario/reactivos', component: FormularioReactivosComponent },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'texto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
