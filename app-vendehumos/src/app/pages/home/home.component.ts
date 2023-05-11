import { Component } from '@angular/core';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { Vendehumo } from 'src/app/types/vendehumo.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  vendehumos: Array<Vendehumo> = []

  constructor(
    private vendehumosService: VendehumosService,
  ) {

  }

  ngOnInit() {
    // this.vendehumos = this.vendehumosService.getVendehumos()
    this.vendehumosService.getVendehumos()
      .subscribe((listaVendehumos: Array<Vendehumo>) => {
        this.vendehumos = listaVendehumos
      })
  }

  votar(vendehumo: Vendehumo) {
    this.vendehumosService.patchNumVotos(vendehumo)
      .subscribe((data: any) => {
        console.log({ data })
        vendehumo.numVotos = data.numVotos
      })
  }

}
