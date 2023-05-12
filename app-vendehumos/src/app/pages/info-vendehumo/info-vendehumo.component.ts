import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-info-vendehumo',
  templateUrl: './info-vendehumo.component.html',
  styleUrls: ['./info-vendehumo.component.css']
})
export class InfoVendehumoComponent {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log({ route: this.route })

    this.route.params.subscribe((params: Params) => {
      if (params['vendehumoId']) {
        const vendehumoId = params['vendehumoId']
      }
      // Object.keys(params)
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('vendehumoId')) {
        const vendehumoId: string = params.get('vendehumoId')!
      }
    })
  }

}
