import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TextoComponent } from './texto/texto.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';

import LocalEs from '@angular/common/locales/es';
registerLocaleData(LocalEs);

@NgModule({
  //Componentes, Pipes
  declarations: [
    AppComponent,
    MenuComponent,
    TextoComponent,
    EjemplosPipesComponent
  ],
  //Lo que necesite angular, mis librerias
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Servicios
  providers: [],
  //componente por defecto
  bootstrap: [AppComponent]
})
export class AppModule { }
