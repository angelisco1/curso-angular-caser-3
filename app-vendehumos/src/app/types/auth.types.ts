export type LoginData = {
  username: string,
  password: string
}

export type User = LoginData & { nombre: string, rol: string }

export type Users = Array<User>