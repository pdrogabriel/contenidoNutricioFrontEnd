import { Component, OnInit } from '@angular/core';
import { GrupoAlimentoService } from '../services/grupo-alimento.service';
import { GrupoAlimento } from '../clases/grupo-alimento';
import { Alimento } from '../clases/alimento';
import { AlimentoNutriente } from '../clases/alimento-nutriente';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})

export class DesayunoComponent implements OnInit {
  grupoAlimentos: GrupoAlimento[] = [];
  alimentos: Alimento[] = [];
  alimentoNutrientes: AlimentoNutriente[] = [];

  // Rolando: Se crea un arreglo para almacenar el arrego nutriente original
  alimentoNutrientesCopia: AlimentoNutriente[] = [];
  alimentoNutrientesTabla: AlimentoNutriente[][] = [];


  alimentosTemporal: Alimento = new Alimento();
  selectedDesayuno: string = '';
  selectedIdAlimento: Number = 0;

  cantidad: Number = 0;
  unidad: String = '';
  proporcion: number = 0;


  nombreAlimentoArray: String[] = []
  tipoUnidadArray: String[] = []
  cantidadAlimentoArray: number[] = []

  sumaMenuTotal: number[] = []
  alimentoNutrientesOriginal: number[] = []



  constructor(private grupoAlimentoService: GrupoAlimentoService) { }

  ngSelectedDesayuno(event: any) {
    this.selectedDesayuno = event.target.value;
    this.obtenerAlimentos(Number(this.selectedDesayuno));
  }

  ngSelectedUnidad(event: any) {
    this.alimentosTemporal = new Alimento();
    this.alimentoNutrientes = [];
    this.alimentoNutrientesOriginal = [];
    this.selectedIdAlimento = event.target.value;
    this.obtenerAlimentosTemporal(Number(this.selectedIdAlimento));
    this.obtenerAlimentoNutrientes(Number(this.selectedIdAlimento));
  }

  ngOnInit(): void {
    this.obtenerGrupoAlimentos();
  }

  obtenerGrupoAlimentos(): void {
    this.grupoAlimentoService.getAllGrupoAlimento()
      .subscribe(
        data => {
          this.grupoAlimentos = data;
        },
        error => {
          console.log(error);
        }
      )
  }

  obtenerAlimentos(grupoAlimentoId: Number): void {

    this.grupoAlimentoService.getAlimentoByGrupoAlimento(grupoAlimentoId)
      .subscribe(
        data => {
          this.alimentos = data;
        },
        error => {
          console.log(error);
        }
      )
  }

  obtenerAlimentosTemporal(idAlimento: Number): void {

    this.grupoAlimentoService.getAlimento(idAlimento)
      .subscribe(
        data => {
          this.alimentosTemporal = data;
          this.cantidad = this.alimentosTemporal.cantidad;
          this.unidad = this.alimentosTemporal.unidad.tipo;
          this.proporcion = Number(this.cantidad);
        },
        error => {
          console.log(error);
        }
      )
  }

  obtenerAlimentoNutrientes(idAlimento: Number): void {

    this.grupoAlimentoService.getAlimentoNutrientes(idAlimento)
      .subscribe(
        data => {
          this.alimentoNutrientes = data;
          // Rolando: se realiza una copia del arreglo alimentoNutrientes
          this.alimentoNutrientesCopia = JSON.parse(JSON.stringify(this.alimentoNutrientes));
          return data
        },
        error => {
          console.log(error);
        }
      )
  }

  calcularNutriente() {
    // Rolando: se realiza una copia del arreglo alimentoNutrientes
    this.alimentoNutrientes = JSON.parse(JSON.stringify(this.alimentoNutrientesCopia));

    console.log(this.proporcion)
    for (let x = 0; x < this.alimentoNutrientes.length; x++) {
      this.alimentoNutrientes[x].cantidad = (this.alimentoNutrientes[x].cantidad * this.proporcion)/Number(this.cantidad);
    }
  }

  restableceNutrientes() {
    this.proporcion = Number(this.cantidad);
    for (let x = 0; x < this.alimentoNutrientes.length; x++) {
      this.alimentoNutrientes[x].cantidad = (this.alimentoNutrientes[x].cantidad * Number(this.cantidad)) / Number(this.proporcion);
      //alert(":p "+this.alimentoNutrientesOriginal[x].cantidad);
      // this.alimentoNutrientes[x].cantidad = this.alimentoNutrientesOriginal[x].cantidad;
      //this.alimentoNutrientes[x].cantidad = this.alimentoNutrientesOriginal[x];
      //this.alimentoNutrientes[x].cantidad = 0
      // this.alimentoNutrientes[x].cantidad=(this.alimentoNutrientes[x].cantidad*this.proporcion)/Number(this.cantidad);
    }
  }

  limpiarNutrientes() {
    for (let x = 0; x < this.alimentoNutrientes.length; x++) {
      this.alimentoNutrientes[x].cantidad = 0
    }
  }



  agregarAlimentoNutrientesTabla() {

    if (this.proporcion == 0) {
      alert("Agregue un nuevo alimento");
    }
    else {
      if (this.alimentoNutrientesTabla.length == 0) {
        //Se agrega el nombre del alimento
        this.nombreAlimentoArray[0] = this.alimentosTemporal.nombre;
        //Se agrega la unidad del alimento
        this.tipoUnidadArray[0] = this.unidad;
        //Se agrega la cantidad del alimento
        this.cantidadAlimentoArray[0] = Number(this.proporcion);
        //Se agregan los nutriente del alimento
        this.alimentoNutrientesTabla[0] = this.alimentoNutrientes;
        //Se actualiza la suma
        for (let i = 0; i < this.alimentoNutrientes.length; i++) {
          this.sumaMenuTotal[i] = this.alimentoNutrientes[i].cantidad;
        }
      } else {
        this.alimentoNutrientesTabla[this.alimentoNutrientesTabla.length] = this.alimentoNutrientes;
        this.nombreAlimentoArray[this.nombreAlimentoArray.length] = this.alimentosTemporal.nombre;
        this.tipoUnidadArray[this.tipoUnidadArray.length] = this.unidad;
        this.cantidadAlimentoArray[this.cantidadAlimentoArray.length] = Number(this.proporcion);
        for (let j = 0; j < this.alimentoNutrientes.length; j++) {
          this.sumaMenuTotal[j] += Number(this.alimentoNutrientes[j].cantidad);
        }
      }
      this.proporcion = 0;
    }
  }

  limpiarTabla() {
    if (this.alimentoNutrientesTabla.length != 0) {
      this.alimentoNutrientesTabla.length = 0;
      this.nombreAlimentoArray.length = 0;
      this.tipoUnidadArray.length = 0;
      this.cantidadAlimentoArray.length = 0;
      this.sumaMenuTotal.length = 0;
      alert("Menú vacío");
    }
    else {
      alert("Menú vacío");
    }
  }

  borrarFila() {
    if (this.alimentoNutrientesTabla.length != 0) {
      this.alimentoNutrientesTabla.length--;
      this.nombreAlimentoArray.length--;
      this.tipoUnidadArray.length--;
      this.cantidadAlimentoArray.length--;
      this.sumaMenuTotal.length--;
      for (let j = 0; j < 28; j++) {
        this.sumaMenuTotal[j] = 0;
      }
      for (let i = 0; i <= this.alimentoNutrientesTabla.length; i++) {

        for (let j = 0; j < 25; j++) {
          this.sumaMenuTotal[j] += this.alimentoNutrientesTabla[i][j].cantidad;
        }
      }
    }
    else {
      alert("Menú vacío");
    }
  }

  almacenarTablaMenu() {
    
    if (this.alimentoNutrientesTabla.length != 0) {
      sessionStorage.setItem("arrayDesayunoNombre", JSON.stringify((this.nombreAlimentoArray)));
      sessionStorage.setItem("arrayDesayunoUnidad", JSON.stringify((this.tipoUnidadArray)));
      sessionStorage.setItem("arrayDesayunoCantidad", JSON.stringify((this.cantidadAlimentoArray)));
      sessionStorage.setItem("menuTableDesayuno", JSON.stringify((this.alimentoNutrientesTabla)));
      sessionStorage.setItem("sumaTableDesayuno", JSON.stringify((this.sumaMenuTotal)));
      alert("El menú del desayuno fue enviado al análisis de ingesta");
    }
    else {
      alert("Menú vacío");
    }
  }
}
