import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { Vendehumo } from 'src/app/types/vendehumo.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  vendehumos: Array<Vendehumo> = []
  isLoggedin: boolean = false

  constructor(
    private vendehumosService: VendehumosService,
    private authService: AuthService,
  ) {

  }

  ngOnInit() {
    // this.vendehumos = this.vendehumosService.getVendehumos()
    this.vendehumosService.getVendehumos()
      .subscribe((listaVendehumos: Array<Vendehumo>) => {
        this.vendehumos = listaVendehumos
      })

    this.authService.isLoggedin$
      .subscribe((isLoggedin: boolean) => {
        this.isLoggedin = isLoggedin
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
