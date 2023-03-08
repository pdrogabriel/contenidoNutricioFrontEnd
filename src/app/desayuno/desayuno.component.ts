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
  alimentoNutrientesCero: AlimentoNutriente[] = [];
  alimentoNutrientesOriginal: AlimentoNutriente[] = [];

  alimentoNutrientesTabla: AlimentoNutriente[][] = [];
  alimentoSumaTabla: AlimentoNutriente[] = [];
  alimentosTemporal: Alimento = new Alimento();
  selectedDesayuno: string = '';
  selectedIdAlimento: Number = 0;

  cantidad: Number = 0;
  unidad: String ='';
  proporcion: number = 1;


  nombreAlimentoArray: String[] = []
  tipoUnidadArray: String[] = []
  cantidadAlimentoArray: number[] = []



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
          this.alimentoNutrientesOriginal = data;
          console.log(this.alimentoNutrientes)
        },
        error => {
          console.log(error);
        }
      )
  }

  calcularNutriente() {
    for(let x=0;x<this.alimentoNutrientes.length;x++){
      this.alimentoNutrientes[x].cantidad = this.alimentoNutrientesOriginal[x].cantidad*this.proporcion;
     // this.alimentoNutrientes[x].cantidad=(this.alimentoNutrientes[x].cantidad*this.proporcion)/Number(this.cantidad);
    }
  }

  restableceNutrientes() {
    for(let x=0;x<this.alimentoNutrientes.length;x++){
      //alert(":p "+this.alimentoNutrientesOriginal[x].cantidad);
     // this.alimentoNutrientes[x].cantidad = this.alimentoNutrientesOriginal[x].cantidad;
     this.alimentoNutrientes[x].cantidad = 0;
     // this.alimentoNutrientes[x].cantidad=(this.alimentoNutrientes[x].cantidad*this.proporcion)/Number(this.cantidad);
    }
  }


  actualizarSumaTotalAlimentos(){
    if(this.alimentoSumaTabla.length == 0){
      this.alimentoSumaTabla=this.alimentoNutrientes;
      this.alimentoNutrientesCero=this.alimentoNutrientes;
     
    }else{  
      for(let x=0;x<this.alimentoNutrientes.length;x++){       
       this.alimentoSumaTabla[x].cantidad+=this.alimentoNutrientes[x].cantidad;
      }
    }         
  }

  agregarAlimentoNutrientesTabla(){   
    if(this.alimentoNutrientesTabla.length == 0){ 
      this.alimentoNutrientesTabla[0] = this.alimentoNutrientes;
      this.nombreAlimentoArray[0] = this.alimentosTemporal.nombre;
      this.tipoUnidadArray[0] = this.unidad;
      this.cantidadAlimentoArray[0] = Number(this.cantidad);
    }else{  
      this.alimentoNutrientesTabla[this.alimentoNutrientesTabla.length] = this.alimentoNutrientes;
      this.nombreAlimentoArray[this.nombreAlimentoArray.length] = this.alimentosTemporal.nombre;
      this.tipoUnidadArray[this.tipoUnidadArray.length] = this.unidad;
      this.cantidadAlimentoArray[this.cantidadAlimentoArray.length] = Number(this.cantidad);
    }  
    //Actualiza la suma de los alimentos
    if(this.alimentoSumaTabla.length == 0){
      this.alimentoSumaTabla=this.alimentoNutrientes;
    }else{  
      for(let i=0;i<this.alimentoNutrientes.length;i++){
       this.alimentoSumaTabla[i].cantidad+=this.alimentoNutrientes[i].cantidad;
      }
    }         
  }

  limpiarTabla()
  {}

  borrarFila()
  {
    let miTabla=document.getElementById("tableMenu");
    if (miTabla!=null)
    {
      //this.alimentoNutrientesTabla[0];
      //this.nombreAlimentoArray[0] = this.alimentosTemporal.nombre;
      //this.tipoUnidadArray[0] = this.unidad;
      //this.cantidadAlimentoArray[0] = Number(this.cantidad);
    }
    else
    {alert("Menú vacío");}
  }

  almacenarTablaMenu()
  { 
    
    sessionStorage.setItem("arrayDesayunoNombre",JSON.stringify((this.nombreAlimentoArray)));
    sessionStorage.setItem("arrayDesayunoUnidad",JSON.stringify((this.tipoUnidadArray)));
    sessionStorage.setItem("arrayDesayunoCantidad",JSON.stringify((this.cantidadAlimentoArray)));
    sessionStorage.setItem("menuTableDesayuno",JSON.stringify((this.alimentoNutrientesTabla)));
    sessionStorage.setItem("sumaTableDesayuno",JSON.stringify((this.alimentoSumaTabla)));

    let temp= JSON.parse(sessionStorage.getItem("arrayDesyaunoUnidad")||"");

    for(let j=0;j<temp.length;j++)
    {
          
      alert("unidad "+j+": "+temp[j]);
    }

    alert("Menú del desayuno enviado al análisis de ingesta");
  }

}



