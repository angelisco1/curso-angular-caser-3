import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent {

  nombre: string = 'one plus 7'
  descripcion: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt enim, labore laudantium architecto dignissimos dolorum optio a recusandae vel consequatur at culpa dolor quod ex unde eum explicabo repudiandae necessitatibus.'
  precio: number = 370
  fechaLanzamiento: Date = new Date(2020, 1, 10)

  currencies: Array<{ code: string, text: string }> = [
    { code: 'USD', text: 'dolares' },
    { code: 'EUR', text: 'euros' },
    { code: 'GBP', text: 'libras' },
  ]
  currencyCode: string = 'GBP'

  dateFormat: string = 'dd/MM/yyyy'
  descuentoAAplicar: number = 10

  msg: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('El canario está en la jaula...')
    }, 2000)
  })

}
