import { Unidad } from "./unidad"

export class Alimento {
    idAlimento: Number = 0
    nombre: String = ""
    cantidad: Number = 0
    grupo_alimento_id: Number = 0
    unidad: Unidad = new Unidad()
}
