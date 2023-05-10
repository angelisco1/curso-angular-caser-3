import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.css']
})
export class FormPlantillaComponent {

  datosUsuario = {
    nombre: 'Ángel',
    email: 'angel@gmail.com',
    password: '1234'
  }

  registro(form: NgForm) {
    // console.log(this.datosUsuario)
    console.log(form)

    console.log(form.value)
  }

}
