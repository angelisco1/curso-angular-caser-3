import { Component } from '@angular/core';

@Component({
  selector: 'app-ej01-data-binding',
  templateUrl: './ej01-data-binding.component.html',
  styleUrls: ['./ej01-data-binding.component.css']
})
export class Ej01DataBindingComponent {
  titulo: string = 'House of the Dragon'
  temporadas: number = 1
  finalizada: boolean = true
  imagen: string = 'assets/hotd.jpeg'

  get estaFinalizada(): string {
    return this.finalizada ? 'Finalizada' : 'No finalizada'
  }

  get imagenTextAlt(): string {
    return 'Imagen de la serie ' + this.titulo
  }

  get styles() {
    if (this.finalizada) {
      return {
        backgroundColor: 'darkgray',
        // 'background-color': 'dark-gray',
        color: 'white'
      }
    }
    return {}
  }

  get pStyles() {
    return {
      color: this.finalizada ? 'blue' : 'orange'
    }
  }

}
