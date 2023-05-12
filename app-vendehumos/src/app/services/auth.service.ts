import { EventEmitter, Injectable } from '@angular/core';
import { LoginData, Users } from '../types/auth.types';


const USUARIOS_REGISTRADOS: Users = [
  {
    username: 'otrovendehumo',
    password: '1234',
    nombre: 'Otro vendehumo',
    rol: 'admin'
  },
  {
    username: 'jbroky',
    password: '1234',
    nombre: 'Jossef Brocky',
    rol: 'user'
  },
  {
    username: 'asd',
    password: '1234',
    nombre: 'asdasda',
    rol: 'user'
  },
]


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin$ = new EventEmitter<boolean>()

  constructor() { }

  initLoginStatus() {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado')
    if (usuarioLogueado) {
      this.isLoggedin$.emit(true)
    } else {
      this.isLoggedin$.emit(false)
    }
  }

  // TODO: este método podría devolver un true/false, y en caso de devolver un false, se puede mostrar en el formulario algún error.
  login(datosLogin: LoginData) {
    const user = USUARIOS_REGISTRADOS.find(usuario => {
      return datosLogin.username === usuario.username && datosLogin.password === usuario.password
    })

    if (user) {
      localStorage.setItem('usuarioLogueado', user.nombre)
      localStorage.setItem('rol', user.rol)
      this.isLoggedin$.emit(true)
    }
  }

  logout() {
    localStorage.removeItem('usuarioLogueado')
    localStorage.removeItem('rol')
    this.isLoggedin$.emit(false)
  }
}
