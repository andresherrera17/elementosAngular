import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TextoComponent } from './texto/texto.component';
import { BuscarComponent } from './menu/buscar/buscar.component';

@NgModule({
  //Componentes, Pipes
  declarations: [
    AppComponent,
    MenuComponent,
    TextoComponent,
    BuscarComponent
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
