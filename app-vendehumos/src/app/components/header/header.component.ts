import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { VendehumosService } from 'src/app/services/vendehumos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isActive: boolean = false
  isLoggedin: boolean = false

  form: FormGroup

  constructor(
    private vendehumosService: VendehumosService,
    private authService: AuthService,
  ) {
    this.form = new FormGroup({
      username: new FormControl('otrovendehumo'),
      password: new FormControl('1234'),
    })
  }

  ngOnInit() {
    // this.vendehumosService.checkIfTokenIsActive()
    //   .subscribe((isActive: boolean) => {
    //     // console.log(isActive)
    //     this.isActive = isActive
    //   })

    this.authService.isLoggedin$
      .subscribe((isLoggedin: boolean) => {
        this.isLoggedin = isLoggedin
      })
  }

  get loggedInText() {
    return this.isActive ? 'Está logueado' : 'Está deslogueado'
  }

  login() {
    const datosLogin = this.form.value
    this.authService.login(datosLogin)
  }

  logout() {
    this.authService.logout()
  }

}
