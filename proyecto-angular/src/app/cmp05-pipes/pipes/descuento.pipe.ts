import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {
  // precio | descuento:20

  transform(value: number, descuento: number = 0): number {
    const resultado = value - (value * descuento / 100)
    return resultado;
  }

}
