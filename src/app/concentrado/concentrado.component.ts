import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { GrupoAlimentoService } from '../services/grupo-alimento.service';
import { GrupoAlimento } from '../clases/grupo-alimento';
import { Alimento } from '../clases/alimento';
import { AlimentoNutriente } from '../clases/alimento-nutriente';


@Component({
  selector: 'app-concentrado',
  templateUrl: './concentrado.component.html',
  styleUrls: ['./concentrado.component.css']
})

export class ConcentradoComponent implements OnInit {

  //nombre del archivo
  public nameFile: string;

  //Arreglos del desayuno
  nombreAlimentoDesayunoArray: String[] = []
  unidadAlimentoDesayunoArray: String[] = []
  cantidadAlimentoDesayunoArray: Number[] = []
  //Tabla del desayuno
  desayunoTabla: AlimentoNutriente[][] = [];
  //Tabla de la suma del desayuno
  desayunoSumaTabla: Number[] = [];

//Arreglos de la colación matutina
nombreAlimentoColacionMatutinaArray: String[] = []
unidadAlimentoColacionMatutinaArray: String[] = []
cantidadAlimentoColacionMatutinaArray: Number[] = []
//Tabla de la colacion matutina
colacionMatutinaTabla: AlimentoNutriente[][] = [];
//Tabla de la suma de la colacion matutina
colacionMatutinaSumaTabla: Number[] = [];

//Arreglos de la Comida
nombreAlimentComidaArray: String[] = []
unidadAlimentoComidaArray: String[] = []
cantidadAlimentoComidaArray: Number[] = []
//Tabla de la Comida
comidaTabla: AlimentoNutriente[][] = [];
//Tabla de la suma de la Comida
comidaSumaTabla: Number[] = [];

//Arreglos de la colación vespertina
nombreAlimentoColacionVespertinaArray: String[] = []
unidadAlimentoColacionVespertinaArray: String[] = []
cantidadAlimentoColacionVespertinaArray: Number[] = []
//Tabla de la colacion vespertina
colacionVespertinaTabla: AlimentoNutriente[][] = [];
//Tabla de la suma de la colacion vespertina
colacionVespertinaSumaTabla: Number[] = [];


//Arreglos de la Cena
nombreAlimentCenaArray: String[] = []
unidadAlimentoCenaArray: String[] = []
cantidadAlimentoCenaArray: Number[] = []
//Tabla de la Cena
cenaTabla: AlimentoNutriente[][] = [];
//Tabla de la suma de la Cena
cenaSumaTabla: Number[] = [];


//Arreglo de la suma Total
sumaTotal: Number[] = [];


   //Declaración del constructor
  constructor() { 

  }

  ngOnInit(): void 
  {
    //Silviana: Aquí cachamos el menú del Desayuno y su suma
    if (sessionStorage.getItem("arrayDesayunoNombre")!=null) 
      this.nombreAlimentoDesayunoArray=JSON.parse(sessionStorage.getItem("arrayDesayunoNombre")||"");
    if (sessionStorage.getItem("arrayDesayunoUnidad")!=null)
      this.unidadAlimentoDesayunoArray=JSON.parse(sessionStorage.getItem("arrayDesayunoUnidad")||"");
    if (sessionStorage.getItem("arrayDesayunoCantidad")!=null)
      this.cantidadAlimentoDesayunoArray=JSON.parse(sessionStorage.getItem("arrayDesayunoCantidad")||"");
    if (sessionStorage.getItem("menuTableDesayuno")!=null)
      this.desayunoTabla=JSON.parse(sessionStorage.getItem("menuTableDesayuno")||"");
    if (sessionStorage.getItem("sumaTableDesayuno")!=null)
      this.desayunoSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableDesayuno")||"");

      //Silviana: Aquí cachamos el menú de la Colacion Matutina y su suma
    if (sessionStorage.getItem("arrayColacionMatutinaNombre")!=null)
      this.nombreAlimentoColacionMatutinaArray=JSON.parse(sessionStorage.getItem("arrayColacionMatutinaNombre")||"");
    if (sessionStorage.getItem("arrayColacionMatutinaUnidad")!=null)
      this.unidadAlimentoColacionMatutinaArray=JSON.parse(sessionStorage.getItem("arrayColacionMatutinaUnidad")||"");
    if (sessionStorage.getItem("arrayColacionMatutinaCantidad")!=null)
      this.cantidadAlimentoColacionMatutinaArray=JSON.parse(sessionStorage.getItem("arrayColacionMatutinaCantidad")||"");
    if (sessionStorage.getItem("menuTableColacionMatutina")!=null)
      this.colacionMatutinaTabla=JSON.parse(sessionStorage.getItem("menuTableColacionMatutina")||"");
    if (sessionStorage.getItem("sumaTableColacionMatutina")!=null)
      this.colacionMatutinaSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableColacionMatutina")||"");

      //Silviana: Aquí cachamos el menú de la Comida y su suma
    if (sessionStorage.getItem("arrayComidaNombre")!=null)
    this.nombreAlimentComidaArray=JSON.parse(sessionStorage.getItem("arrayComidaNombre")||"");
    if (sessionStorage.getItem("arrayComidaUnidad")!=null)
    this.unidadAlimentoComidaArray=JSON.parse(sessionStorage.getItem("arrayComidaUnidad")||"");
    if (sessionStorage.getItem("arrayComidaCantidad")!=null)
    this.cantidadAlimentoComidaArray=JSON.parse(sessionStorage.getItem("arrayComidaCantidad")||"");   
    if (sessionStorage.getItem("menuTableComida")!=null)
    this.comidaTabla=JSON.parse(sessionStorage.getItem("menuTableComida")||"");
    if (sessionStorage.getItem("sumaTableComida")!=null)
    this.comidaSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableComida")||"");

    //Silviana: Aquí cachamos el menú de la Colacion Vespertina y su suma
    if (sessionStorage.getItem("arrayColacionVespertinaNombre")!=null)
    this.nombreAlimentoColacionVespertinaArray=JSON.parse(sessionStorage.getItem("arrayColacionVespertinaNombre")||"");
    if (sessionStorage.getItem("arrayColacionVespertinaUnidad")!=null)
    this.unidadAlimentoColacionVespertinaArray=JSON.parse(sessionStorage.getItem("arrayColacionVespertinaUnidad")||"");
    if (sessionStorage.getItem("arrayColacionVespertinaCantidad")!=null)
    this.cantidadAlimentoColacionVespertinaArray=JSON.parse(sessionStorage.getItem("arrayColacionVespertinaCantidad")||"");   
    if (sessionStorage.getItem("menuTableColacionVespertina")!=null)
    this.colacionVespertinaTabla=JSON.parse(sessionStorage.getItem("menuTableColacionVespertina")||"");
    if (sessionStorage.getItem("sumaTableColacionVespertina")!=null)
    this.colacionVespertinaSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableColacionVespertina")||"");

    //Silviana: Aquí cachamos el menú de la Cena y su suma
    if (sessionStorage.getItem("arrayCenaNombre")!=null)
    this.nombreAlimentCenaArray=JSON.parse(sessionStorage.getItem("arrayCenaNombre")||"");
    if (sessionStorage.getItem("arrayCenaUnidad")!=null)
    this.unidadAlimentoCenaArray=JSON.parse(sessionStorage.getItem("arrayCenaUnidad")||"");
    if (sessionStorage.getItem("arrayCenaCantidad")!=null)
    this.cantidadAlimentoCenaArray=JSON.parse(sessionStorage.getItem("arrayCenaCantidad")||"");   
    if (sessionStorage.getItem("menuTableCena")!=null)
    this.cenaTabla=JSON.parse(sessionStorage.getItem("menuTableCena")||"");
    if (sessionStorage.getItem("sumaTableCena")!=null)
    this.cenaSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableCena")||"");

      sessionStorage.clear();

      for (let i = 0; i < 25; i++)
      {
        this.sumaTotal[i]=Number(this.desayunoSumaTabla[i])+Number(this.colacionMatutinaSumaTabla[i])+Number(this.comidaSumaTabla[i])+Number(this.colacionVespertinaSumaTabla[i])+Number(this.cenaSumaTabla[i]);
      }
  
  }


  //Importar a Excel
  exportToExcel(): void {
    this.nameFile = 'analisisIngesta.xlsx';
    if ("nombreArchivo" in sessionStorage) {
      this.nameFile = (sessionStorage.getItem('nombreArchivo')||"analisisIngesta.xlsx");
  } 
    let element = document.getElementById('analisisIngesta-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.nameFile);
  }


}
