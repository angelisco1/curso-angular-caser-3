import { Component } from '@angular/core';
import { Telefono } from '../types/telefono.type';

@Component({
  selector: 'app-cmp04-directivas',
  templateUrl: './cmp04-directivas.component.html',
  styleUrls: ['./cmp04-directivas.component.css']
})
export class Cmp04DirectivasComponent {
  textoNaranjaActivado: boolean = false
  fondoNegroActivado: boolean = false

  listaTelefonos: Array<Telefono> = [
    { id: 1, nombre: 'One Plus 7', precio: 350 },
    { id: 2, nombre: 'Samsung Galaxy S8', precio: 200 },
    { id: 3, nombre: 'iPhone X', precio: 800 },
  ]

  colores: Array<string> = ['red', 'yellow', 'blue']
  colorSeleccionado: string = 'yellow'

  get pClases() {
    return {
      textoNaranja: this.textoNaranjaActivado,
      fondoNegro: this.fondoNegroActivado,
    }
  }

  changeTextoNaranja(value: boolean): void {
    this.textoNaranjaActivado = value
  }

  changeFondoNegro(value: boolean): void {
    this.fondoNegroActivado = value
  }

}
