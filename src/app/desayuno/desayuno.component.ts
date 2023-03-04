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
  alimentoSumaTabla: AlimentoNutriente[][] = [];
  alimentosTemporal: Alimento = new Alimento();
  selectedDesayuno: string = '';
  selectedIdAlimento: Number = 0;

  cantidad: Number = 0;
  unidad: String ='';

  proporcion: number = 1;


  nombreAlimentoArray: String[] = []
  tipoUnidadArray: String[] = []



  constructor(private grupoAlimentoService: GrupoAlimentoService) { }

  ngSelectedDesayuno(event: any) {
    this.selectedDesayuno = event.target.value;
    this.obtenerAlimentos(Number(this.selectedDesayuno));
  }

  ngSelectedUnidad(event: any) {
    this.alimentosTemporal = new Alimento();
    this.alimentoNutrientes = [];
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
  }

  calcularNutriente() {
    for(let x=0;x<this.alimentoNutrientes.length;x++){
      //this.alimentoNutrientes[x].cantidad *= this.proporcion;
      this.alimentoNutrientes[x].cantidad=(this.alimentoNutrientes[x].cantidad*this.proporcion)/Number(this.cantidad);
    }
  }

  agregarAlimentoNutrientesTabla(){   
    if(this.alimentoNutrientesTabla.length == 0){
      this.alimentoNutrientesTabla[0] = this.alimentoNutrientes;
      this.nombreAlimentoArray[0] = this.alimentosTemporal.nombre;
      this.tipoUnidadArray[0] = this.unidad;
      
    }else{  
      this.alimentoNutrientesTabla[this.alimentoNutrientesTabla.length + 1] = this.alimentoNutrientes;
      this.nombreAlimentoArray[this.nombreAlimentoArray.length + 1] = this.alimentosTemporal.nombre;
      this.tipoUnidadArray[this.tipoUnidadArray.length + 1] = this.unidad;
    }   

    for (let i=0; i < this.alimentoNutrientes.length; i++)
    {
      this.alimentoSumaTabla[0][i].cantidad=0;
    }
    

  }

  almacenarTablaMenu()
  {
    alert(this.nombreAlimentoArray[0]+" | "+this.unidad+" | "+this.alimentoNutrientesTabla[0][0].cantidad+" | "+this.alimentoNutrientesTabla[0][1].cantidad+" | "+this.alimentoNutrientesTabla[0][2].cantidad);









  }


 

}