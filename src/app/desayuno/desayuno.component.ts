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
  alimentoNutrientesTabla: AlimentoNutriente[][] = [];
  
  
  alimentosTemporal: Alimento = new Alimento();
  selectedDesayuno: string = '';
  selectedIdAlimento: Number = 0;

  cantidad: Number = 0;
  unidad: String ='';
  proporcion: number = 1;


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
          console.log(this.alimentoNutrientes)
        },
        error => {
          console.log(error);
        }
      )
    for (let i=0;i<this.alimentoNutrientes.length;i++)
    {
      this.alimentoNutrientesOriginal[i]=this.alimentoNutrientes[i].cantidad;
      alert(":p -> "+this.alimentoNutrientesOriginal[i]);
    }
  }

  calcularNutriente() {
    for(let x=0;x<this.alimentoNutrientes.length;x++){
      //this.alimentoNutrientes[x].cantidad = this.alimentoNutrientesOriginal[x].cantidad*this.proporcion;
     // this.alimentoNutrientes[x].cantidad=(this.alimentoNutrientes[x].cantidad*this.proporcion)/Number(this.cantidad);
    }
  }

  restableceNutrientes() {
    for(let x=0;x<this.alimentoNutrientes.length;x++){
      //alert(":p "+this.alimentoNutrientesOriginal[x].cantidad);
     // this.alimentoNutrientes[x].cantidad = this.alimentoNutrientesOriginal[x].cantidad;
     //this.alimentoNutrientes[x].cantidad = this.alimentoNutrientesOriginal[x];
     this.alimentoNutrientes[x].cantidad = 0
     // this.alimentoNutrientes[x].cantidad=(this.alimentoNutrientes[x].cantidad*this.proporcion)/Number(this.cantidad);
    }
  }



  agregarAlimentoNutrientesTabla(){   
    if(this.alimentoNutrientesTabla.length == 0){ 
      this.nombreAlimentoArray[0] = this.alimentosTemporal.nombre;
      this.tipoUnidadArray[0] = this.unidad;
      this.cantidadAlimentoArray[0] = Number(this.cantidad);
      this.alimentoNutrientesTabla[0] = this.alimentoNutrientes;
      for(let i=0;i<this.alimentoNutrientes.length;i++)
      {
        this.sumaMenuTotal[i]=this.alimentoNutrientes[i].cantidad;
      }
    }else{  
      this.alimentoNutrientesTabla[this.alimentoNutrientesTabla.length] = this.alimentoNutrientes;
      this.nombreAlimentoArray[this.nombreAlimentoArray.length] = this.alimentosTemporal.nombre;
      this.tipoUnidadArray[this.tipoUnidadArray.length] = this.unidad;
      this.cantidadAlimentoArray[this.cantidadAlimentoArray.length] = Number(this.cantidad);
      for(let j=0;j<this.alimentoNutrientes.length;j++){
        this.sumaMenuTotal[j]+=Number(this.alimentoNutrientes[j].cantidad);
       }
    }  
  }

  limpiarTabla()
  {
    if (this.alimentoNutrientesTabla.length!=0)
    {
      this.alimentoNutrientesTabla.length=0;
      this.nombreAlimentoArray.length=0;
      this.tipoUnidadArray.length=0;
      this.cantidadAlimentoArray.length=0;
      this.sumaMenuTotal.length=0;
      alert("Menú vacío");
    }
    else
    {
      alert("Menú vacío");
    }
  }

  borrarFila()
  {
    if (this.alimentoNutrientesTabla.length!=0)
    {
      this.alimentoNutrientesTabla.length--;
      this.nombreAlimentoArray.length--;
      this.tipoUnidadArray.length--;
      this.cantidadAlimentoArray.length--;
      this.sumaMenuTotal.length--;
      for (let j=0;j<28;j++)
        {
          this.sumaMenuTotal[j]=0;
        }
      for (let i=0;i<=this.alimentoNutrientesTabla.length;i++)
        { 
          
          for (let j=0;j<25;j++)
          {
            this.sumaMenuTotal[j]+=this.alimentoNutrientesTabla[i][j].cantidad;
          }
        }
    }
    else
    {
      alert("Menú vacío");
    }
  }

  almacenarTablaMenu()
  { 
    if (this.alimentoNutrientesTabla.length!=0)
    {
      sessionStorage.setItem("arrayDesayunoNombre",JSON.stringify((this.nombreAlimentoArray)));
    sessionStorage.setItem("arrayDesayunoUnidad",JSON.stringify((this.tipoUnidadArray)));
    sessionStorage.setItem("arrayDesayunoCantidad",JSON.stringify((this.cantidadAlimentoArray)));
    sessionStorage.setItem("menuTableDesayuno",JSON.stringify((this.alimentoNutrientesTabla)));
    sessionStorage.setItem("sumaTableDesayuno",JSON.stringify((this.sumaMenuTotal)));

   //let temp= JSON.parse(sessionStorage.getItem("arrayDesayunoCantidad")||"");
    //for(let j=0;j<temp.length;j++)
   // {
     // alert("cantidad "+j+": "+temp[j]);
    //}

    alert("Menú del desayuno enviado al análisis de ingesta");
    }
    else
    {
      alert("Menú vacío");
    }



    
  }

}



