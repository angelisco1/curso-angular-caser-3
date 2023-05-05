import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp02-input-output',
  templateUrl: './cmp02-input-output.component.html',
  styleUrls: ['./cmp02-input-output.component.css']
})
export class Cmp02InputOutputComponent {

  carrito: Array<any> = []

  addToCart(producto: any): void {
    alert('Se ha añadido el producto ' + JSON.stringify(producto) + ' al carrito de la compra.')
    this.carrito.push(producto)
  }

}
