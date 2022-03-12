import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/interfaces/persona.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  persona: IPersona = {} as IPersona // formulario;
  personaAreeglo: IPersona[] = [];
  paises: any[] = [];
  edad: number = 0;

  personaRecuperada: any;
  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  mostrarNombre() {
    console.log(this.persona.nombre)
  }

  guardar() {

    localStorage.setItem('persona', JSON.stringify(this.persona))
  }

  recuperarPersona() {

    this.personaRecuperada = localStorage.getItem('persona');
  }

  getPaises() {
    this._paisService.getPaises().subscribe(paises => {
      this.paises = paises;
    });
  }

  // validarMinLetras() {
  //   return this.persona.nombre.length < 5 ? true : false;
  // }


  // Formulario en una nueva menu
  // campos
  // Nombres
  // apellido
  // Correo
  // direecion
  // edad > 18 
  //   cedula *ngIf
  //       si no
  //   tarjetaidentidad *ngIf
  // guardar [persona1, persona2, persona 3] varias personas
  // van a mostrar en una tabla las personas que se crean  *ngFor

  circular() {
    let objeto1 = { nombre: 'Andres', edad: 2 };

    let objeto2 = { ...objeto1, apellido: 2 };

    let objeto3 = Object.assign(objeto1);

  }

}
