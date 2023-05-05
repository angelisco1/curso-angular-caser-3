// export type Telefono = {
//   id: number,
//   nombre: string,
//   precio: number,
// }

// export interface Telefono {
//   id: number,
//   nombre: string,
//   precio: number,
// }

// export class Telefono {
//   id: number
//   nombre: string
//   precio: number

//   constructor(id: number, nombre: string, precio: number) {
//     this.id = id
//     this.nombre = nombre
//     this.precio = precio
//   }
// }

export class Telefono {
  constructor(
    public id: number,
    public nombre: string,
    public precio: number
  ) {

  }
}