import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(nombre: string): string {

    //volver todo minuscula
    nombre = nombre.toLocaleLowerCase();

    //separar palabras
    let separaPalabras = nombre.split(' ');

    //cambiar cada posición del arreglo por la capitalización
    //Andres Herrera Benavides
    separaPalabras = separaPalabras.map(nombre => {
      return `${nombre[0].toLocaleUpperCase()}${nombre.substring(1)}`
    })

    return separaPalabras.join(' ');
  }

}
