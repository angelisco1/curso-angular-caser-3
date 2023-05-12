// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, createUrlTreeFromSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
// }

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioLogueado = localStorage.getItem('usuarioLogueado')
  if (usuarioLogueado) {
    return true
  }
  return createUrlTreeFromSnapshot(route, ['/home'])
}
