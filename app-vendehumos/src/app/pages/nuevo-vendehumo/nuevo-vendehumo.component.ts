import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { Vendehumo } from 'src/app/types/vendehumo.types';

@Component({
  selector: 'app-nuevo-vendehumo',
  templateUrl: './nuevo-vendehumo.component.html',
  styleUrls: ['./nuevo-vendehumo.component.css']
})
export class NuevoVendehumoComponent {
  formVendehumo: FormGroup
  categoryOptions: Array<{ value: string, text: string }> = [
    { value: 'crypto', text: 'Criptomonedas' },
    { value: 'trading', text: 'Trading' },
    { value: 'nutricion', text: 'Nutrición' },
    { value: 'otros', text: 'Otros' },
  ]

  constructor(
    private vendehumosService: VendehumosService,
    private router: Router,
  ) {
    this.formVendehumo = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      categoria: new FormControl('crypto', [Validators.required]),
      imagen: new FormControl('https://xsgames.co/randomusers/assets/avatars/male/9.jpg', [Validators.required]),
      id: new FormControl(null),
      numVotos: new FormControl(0),
    })
  }

  crearVendehumo() {
    // const vendehumo = new Vendehumo(null, 'Un vendehumo', 'crypto', 'una imagen')

    const vendehumo = this.formVendehumo.value as Vendehumo

    console.log('POST')
    this.vendehumosService.postVendehumo(vendehumo)
      .subscribe((data: any) => {
        console.log({ data })
        this.router.navigateByUrl('/home')
      })
  }

}
