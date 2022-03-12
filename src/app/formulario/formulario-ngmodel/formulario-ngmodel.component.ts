import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/interfaces/persona.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  persona: IPersona = {} as IPersona;
  paises: any[] = [];
  edad: number = 0;
  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  mostrarNombre() {
    console.log(this.persona.nombre)
  }

  guardar() {
    console.log(this.persona);
  }

  getPaises() {
    this._paisService.getPaises().subscribe(paises => {
      this.paises = paises;
    });
  }

  // validarMinLetras() {
  //   return this.persona.nombre.length < 5 ? true : false;
  // }

}
