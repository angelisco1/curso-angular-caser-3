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

  logoAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png'
  tituloLogo: string = 'Angular'

  constructor() { }

  get nombreCompleto(): string {
    return this.nombre + ' ' + this.apellido
  }

  get textoAltLogo(): string {
    return 'Logo de ' + this.tituloLogo
  }

  getNombreCompleto(): string {
    return this.nombre + ' ' + this.apellido
  }

  gritaMiNombre(): void {
    const textToSpeech: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(this.nombreCompleto.toUpperCase())
    speechSynthesis.speak(textToSpeech)
  }

  mostrarPorConsola(): void {
    console.log('El ratón ha pasado por encima de la imagen.')
  }

  evitarIrAGoogle(event: Event): void {
    console.log({ event })
    // const target: EventTarget | null = event.target
    // this.nombre = (target as HTMLAnchorElement).value
    event.preventDefault()
  }

  changeNombre(event: Event): void {
    console.log({ event })
    // event.target.value
    const target: EventTarget | null = event.target
    this.nombre = (target as HTMLInputElement).value

    // if (target) {
    //   const target: EventTarget = event.target
    //   this.nombre = target.value
    // }
  }
}
