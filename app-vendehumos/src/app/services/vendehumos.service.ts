import { Injectable } from '@angular/core';
import { Vendehumo } from '../types/vendehumo.types';
import { Observable, Subscriber, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {
  listaVendehumos: Array<Vendehumo> = [
    new Vendehumo('1', 'Vendehumo 1', 'Cat 1', 'Img 1'),
    new Vendehumo('2', 'Vendehumo 2', 'Cat 2', 'Img 2', 3),
    new Vendehumo('3', 'Vendehumo 3', 'Cat 3', 'Img 3', 1),
  ]

  private url: string = 'https://proyecto-ejemplo-cd33f.firebaseio.com/curso-angular-3/angel/vendehumos'

  constructor(
    private http: HttpClient,
  ) { }

  getVendehumos(): Observable<Array<Vendehumo>> {
    // return of(this.listaVendehumos).pipe(
    //   delay(2500)
    // )
    return this.http.get(this.url + '.json')
      .pipe(
        map((data: any) => {
          const resultado: Array<Vendehumo> = []

          for (let id in data) {
            const datosVendehumo = data[id]
            const vendehumo = new Vendehumo(
              id,
              datosVendehumo.nombre,
              datosVendehumo.categoria,
              datosVendehumo.imagen,
              datosVendehumo.numVotos
            )
            resultado.push(vendehumo)
          }

          return resultado
        })
      )
  }

  postVendehumo(vendehumo: Vendehumo): Observable<any> {
    return this.http.post(this.url + '.json', vendehumo)
  }

  patchNumVotos(vendehumo: Vendehumo): Observable<any> {
    // const url = this.url + '/' + vendehumo.id + '.json'
    const url = `${this.url}/${vendehumo.id}.json`
    const votosActualizados = { numVotos: vendehumo.numVotos + 1 }
    return this.http.patch(url, votosActualizados)
  }


  checkIfTokenIsActive(): Observable<boolean> {
    return new Observable((subscriber: Subscriber<boolean>) => {
      setInterval(() => {
        const numRandom = Math.floor(Math.random() * 10)

        if (numRandom > 2) {
          subscriber.next(true)
        } else {
          subscriber.next(false)
        }

      }, 2000)
    })
  }

}
