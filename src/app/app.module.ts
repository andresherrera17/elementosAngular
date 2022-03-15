//librerias angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import LocalEs from '@angular/common/locales/es';

//rutas
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TextoComponent } from './texto/texto.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';

//pipes
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { FormularioNgmodelComponent } from './formulario/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './formulario/formulario-reactivos/formulario-reactivos.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisService } from './services/pais.service';
import { HeroesModule } from './heroes/heroes.module';


registerLocaleData(LocalEs);

@NgModule({
  //Componentes, Pipes
  declarations: [
    AppComponent,
    MenuComponent,
    TextoComponent,
    EjemplosPipesComponent,
    MayusculasPipe,
    ContrasenaPipe,
    CapitalizarPipe,
    FormularioNgmodelComponent,
    FormularioReactivosComponent
  ],
  //Lo que necesite angular, mis librerias
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // Servicios
  providers: [PaisService],
  //componente por defecto
  bootstrap: [AppComponent]
})
export class AppModule { }
