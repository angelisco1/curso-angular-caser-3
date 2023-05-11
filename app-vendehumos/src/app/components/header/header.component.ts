import { Component } from '@angular/core';
import { VendehumosService } from 'src/app/services/vendehumos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isActive: boolean = false

  constructor(
    private vendehumosService: VendehumosService
  ) { }

  ngOnInit() {
    this.vendehumosService.checkIfTokenIsActive()
      .subscribe((isActive: boolean) => {
        // console.log(isActive)
        this.isActive = isActive
      })
  }

  get loggedInText() {
    return this.isActive ? 'Está logueado' : 'Está deslogueado'
  }

}
