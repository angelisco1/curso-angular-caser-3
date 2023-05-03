import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css']
})
export class Cmp01DataBindingComponent {

  // propiedad: tipo = valor;
  // string, number, boolean, any, null, undefined, void, Array<string>
  nombre: string = 'Ángel';
  apellido: string = 'Villalba';

  get nombreCompleto() {
    return this.nombre + ' ' + this.apellido
  }

  getNombreCompleto() {
    return this.nombre + ' ' + this.apellido
  }

}
