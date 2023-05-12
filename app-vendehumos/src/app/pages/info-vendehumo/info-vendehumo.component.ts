import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { Vendehumo } from 'src/app/types/vendehumo.types';

@Component({
  selector: 'app-info-vendehumo',
  templateUrl: './info-vendehumo.component.html',
  styleUrls: ['./info-vendehumo.component.css']
})
export class InfoVendehumoComponent {

  vendehumo: Vendehumo | null = null

  constructor(
    private route: ActivatedRoute,
    private vendehumosService: VendehumosService,
  ) { }

  ngOnInit() {
    console.log({ route: this.route })
    // this.route.params.subscribe((params: Params) => {
    //   if (params['vendehumoId']) {
    //     const vendehumoId = params['vendehumoId']
    //   }
    //   // Object.keys(params)
    // })

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('vendehumoId')) {
        const vendehumoId: string = params.get('vendehumoId')!

        this.vendehumosService.getVendehumo(vendehumoId)
          .subscribe((vendehumo: Vendehumo) => {
            this.vendehumo = vendehumo
          })

      }
    })
  }

}
