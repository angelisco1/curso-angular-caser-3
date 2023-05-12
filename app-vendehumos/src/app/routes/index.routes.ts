import { RouterModule, Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { NuevoVendehumoComponent } from "../pages/nuevo-vendehumo/nuevo-vendehumo.component";
import { ModuleWithProviders, inject } from "@angular/core";
import { ErrorComponent } from "../pages/error/error.component";
import { InfoVendehumoComponent } from "../pages/info-vendehumo/info-vendehumo.component";
import { authGuard } from "../guards/auth.guard";


const VENDEHUMOS_ROUTES: Routes = [
  { path: 'info-vendehumo/:vendehumoId', component: InfoVendehumoComponent, canActivate: [authGuard] },
]


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: VENDEHUMOS_ROUTES },
  { path: 'nuevo-vendehumo', component: NuevoVendehumoComponent, canActivate: [authGuard] },
  // { path: 'info-vendehumo/:vendehumoId', component: InfoVendehumoComponent },
  { path: '**', component: ErrorComponent }
]

export const AppRouterModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES)


// @NgModule({
//   declarations: [],
//   imports: [],
//   providers: [MiServicio]
// })
// class MiModulo {
//   static forRoot(rutas) {
//     return {
//       module: MiModulo,
//       providers: [
//         { value: rutas, token: 'RUTAS' }
//       ]
//     }
//   }
// }