export class Vendehumo {

  constructor(
    public id: string | null,
    public nombre: string,
    public categoria: string,
    public imagen: string,
    public numVotos: number = 0,
  ) {

  }

}