import { Role } from "./role"

export class Usuario {  
    id: Number = 0  
    nombre: String = ""
    apellidoPaterno: String = ""
    apellidoMaterno: string = ""
    institucion: String = ""    
    username: String = ""
    email: String = ""
    password: String = ""
    acceso: Number = 0
    roles: Role []= []
}
