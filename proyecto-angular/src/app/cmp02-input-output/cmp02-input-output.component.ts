import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp02-input-output',
  templateUrl: './cmp02-input-output.component.html',
  styleUrls: ['./cmp02-input-output.component.css']
})
export class Cmp02InputOutputComponent {
  listaSugus: Array<any> = [
    { sabor: 'fresa', color: 'red' },
    { sabor: 'naranja', color: 'orange' },
    { sabor: 'limón', color: 'yellow' },
    { sabor: 'piña', color: 'blue' },
    { sabor: 'sandia', color: 'indianred' },
  ]

  carrito: Array<any> = [
    // { sugus: {sabor: '', color: ''}, cantidad: 0}
  ]


  addToCart(producto: any): void {
    // const productoDelCarrito = this.carrito.find(itemCarrito => itemCarrito.sugus.sabor === producto.sabor)
    const productoDelCarrito = this.carrito.find((itemCarrito) => {
      return itemCarrito.sugus.sabor === producto.sabor
    })

    const estaEnElCarrito: boolean = productoDelCarrito !== undefined
    if (estaEnElCarrito) {
      productoDelCarrito.cantidad += 1
    } else {
      this.carrito.push({ sugus: producto, cantidad: 1 })
    }
  }

  removeFromCart(producto: any) {
    const productoDelCarrito = this.carrito.find((itemCarrito) => {
      return itemCarrito.sugus.sabor === producto.sabor
    })
    const estaEnElCarrito: boolean = productoDelCarrito !== undefined

    if (estaEnElCarrito) {
      if (productoDelCarrito.cantidad <= 1) {
        // Quitamos del array
        this.carrito = this.carrito.filter((itemCarrito) => {
          return itemCarrito.sugus.sabor !== producto.sabor
        })

      } else {
        productoDelCarrito.cantidad -= 1
      }
    } else {
      alert('No está en el carrito.')
    }

  }

}
