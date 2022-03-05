import { Component, OnInit } from '@angular/core';

//decoradores
@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  nombre: string = 'Andres Herrera';
  cont: number = 0;
  PI: number = Math.PI;
  porcentaje: number = 0.236;
  salario: number = 1243.5;
  fecha: Date = new Date()
  idioma: string = 'es';
  activar: boolean = false;
  nombreM: string = 'andres HerRera bEnaVides'
  constructor() { }

  ngOnInit(): void {
  }

  contador() {
    this.cont++
  }


}
