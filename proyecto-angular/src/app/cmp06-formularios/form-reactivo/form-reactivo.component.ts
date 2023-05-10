import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {

  formRegistro: FormGroup

  constructor() {
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z]+@[a-z]+\.[a-z]+")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    })
  }

  registro() {
    console.log(this.formRegistro)
  }

}
