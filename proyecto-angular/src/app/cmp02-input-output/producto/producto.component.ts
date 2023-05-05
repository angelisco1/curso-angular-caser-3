import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() sabor: string = 'fresa'
  @Input() color: string = 'red'

  @Output() productoAñadido = new EventEmitter<any>()


  addProduct() {
    const datosSugus = {
      color: this.color,
      sabor: this.sabor
    }
    console.log({ datosSugus })
    this.productoAñadido.emit(datosSugus)
  }

}
