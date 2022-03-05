import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(nombre: string, activar: boolean): string {
    return (activar) ? '*'.repeat(nombre.length) : nombre;
  }

}
