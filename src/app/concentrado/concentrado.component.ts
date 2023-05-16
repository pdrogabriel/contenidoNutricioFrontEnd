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
//Tabla de la colacion matutina
colacionMatutinaSumaTabla: Number[] = [];

//Arreglos de la Comida
nombreAlimentComidaArray: String[] = []
unidadAlimentoComidaArray: String[] = []
cantidadAlimentoComidaArray: Number[] = []
//Tabla de la Comida
comidaTabla: AlimentoNutriente[][] = [];
//Tabla de la Comida
comidaSumaTabla: Number[] = [];

//Arreglos de la colación vespertina
nombreAlimentoColacionVespertinaArray: String[] = []
unidadAlimentoColacionVespertinaArray: String[] = []
cantidadAlimentoColacionVespertinaArray: Number[] = []
//Tabla de la colacion vespertina
colacionVespertinaTabla: AlimentoNutriente[][] = [];
//Tabla de la colacion vespertina
colacionVespertinaSumaTabla: Number[] = [];


//Arreglos de la Cena
nombreAlimentCenaArray: String[] = []
unidadAlimentoCenaArray: String[] = []
cantidadAlimentoCenaArray: Number[] = []
//Tabla de la Cena
cenaTabla: AlimentoNutriente[][] = [];
//Tabla de la Cena
cenaSumaTabla: Number[] = [];


   //Declaración del constructor
  constructor() { 

  }

  // Esta es la SUMATOTAL
SUMATOTAL = [
  {
    PesoBrutoRedondeado: 0,
    PesoNeto: 0,
    Agua: 0,
    Energia: 0,
    Proteina: 0,
    Lipidos: 0,
    HidratosDeCarbono: 0,
    Fibra: 0,
    VitaminaA: 0,
    AcidoAscorbico: 0,
    AcidoFolico: 0,
    Hierro: 0,
    Potasio: 0,
    IndiceGlicemico: 0,
    CargaGlicemica: 0,
    AzucarPorEquivalente: 0,
    Calcio: 0,
    Sodio: 0,
    Selenio: 0,
    Fosforo: 0,
    Colesterol: 0,
    AgSaturados: 0,
    AgMonoinsaturados: 0,
    AgPoliinsaturados: 0,
    Etanol: 0,
  }
];

  ngOnInit(): void 
  {
    //Desayuno y su suma
      this.nombreAlimentoDesayunoArray=JSON.parse(sessionStorage.getItem("arrayDesayunoNombre")||"");
      
      this.unidadAlimentoDesayunoArray=JSON.parse(sessionStorage.getItem("arrayDesayunoUnidad")||"");
      this.cantidadAlimentoDesayunoArray=JSON.parse(sessionStorage.getItem("arrayDesayunoCantidad")||"");   
      this.desayunoTabla=JSON.parse(sessionStorage.getItem("menuTableDesayuno")||"");
      this.desayunoSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableDesayuno")||"");

    //Colacion Matutina y su suma
      this.nombreAlimentoColacionMatutinaArray=JSON.parse(sessionStorage.getItem("arrayColacionMatutinaNombre")||"");
      this.unidadAlimentoColacionMatutinaArray=JSON.parse(sessionStorage.getItem("arrayColacionMatutinaUnidad")||"");
      this.cantidadAlimentoColacionMatutinaArray=JSON.parse(sessionStorage.getItem("arrayColacionMatutinaCantidad")||"");   
      this.colacionMatutinaTabla=JSON.parse(sessionStorage.getItem("menuTableColacionMatutina")||"");
      this.colacionMatutinaSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableColacionMatutina")||"");

    //Comida y su suma
    this.nombreAlimentComidaArray=JSON.parse(sessionStorage.getItem("arrayComidaNombre")||"");
    this.unidadAlimentoComidaArray=JSON.parse(sessionStorage.getItem("arrayComidaUnidad")||"");
    this.cantidadAlimentoComidaArray=JSON.parse(sessionStorage.getItem("arrayComidaCantidad")||"");   
    this.comidaTabla=JSON.parse(sessionStorage.getItem("menuTableComida")||"");
    this.comidaSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableComida")||"");

    //Colacion Vespertina y su suma
    this.nombreAlimentoColacionVespertinaArray=JSON.parse(sessionStorage.getItem("arrayColacionVespertinaNombre")||"");
    this.unidadAlimentoColacionVespertinaArray=JSON.parse(sessionStorage.getItem("arrayColacionVespertinaUnidad")||"");
    this.cantidadAlimentoColacionVespertinaArray=JSON.parse(sessionStorage.getItem("arrayColacionVespertinaCantidad")||"");   
    this.colacionVespertinaTabla=JSON.parse(sessionStorage.getItem("menuTableColacionVespertina")||"");
    this.colacionVespertinaSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableColacionVespertina")||"");

    //Cena y su suma
    this.nombreAlimentCenaArray=JSON.parse(sessionStorage.getItem("arrayCenaNombre")||"");
    this.unidadAlimentoCenaArray=JSON.parse(sessionStorage.getItem("arrayCenaUnidad")||"");
    this.cantidadAlimentoCenaArray=JSON.parse(sessionStorage.getItem("arrayCenaCantidad")||"");   
    this.cenaTabla=JSON.parse(sessionStorage.getItem("menuTableCena")||"");
    this.cenaSumaTabla=JSON.parse(sessionStorage.getItem("sumaTableCena")||"");



      sessionStorage.clear();

   


    

//this.SUMATOTAL[0].PesoBrutoRedondeado=this.SumaDesayuno[0].PesoBrutoRedondeado.valueOf()+
//this.SumaColacionMatutina[0].PesoBrutoRedondeado.valueOf()+this.SumaComida[0].PesoBrutoRedondeado.valueOf()+
//this.SumaColacionVespertina[0].PesoBrutoRedondeado.valueOf()+this.SumaCena[0].PesoBrutoRedondeado.valueOf();

//this.SUMATOTAL[0].PesoNeto=this.SumaDesayuno[0].PesoNeto.valueOf()+
//this.SumaColacionMatutina[0].PesoNeto.valueOf()+this.SumaComida[0].PesoNeto.valueOf()+
//this.SumaColacionVespertina[0].PesoNeto.valueOf()+this.SumaCena[0].PesoNeto.valueOf();

//this.SUMATOTAL[0].Agua=this.SumaDesayuno[0].Agua.valueOf()+
//this.SumaColacionMatutina[0].Agua.valueOf()+this.SumaComida[0].Agua.valueOf()+
//this.SumaColacionVespertina[0].Agua.valueOf()+this.SumaCena[0].Agua.valueOf();

//this.SUMATOTAL[0].Energia=this.SumaDesayuno[0].Energia.valueOf()+
//this.SumaColacionMatutina[0].Energia.valueOf()+this.SumaComida[0].Energia.valueOf()+
//this.SumaColacionVespertina[0].Energia.valueOf()+this.SumaCena[0].Energia.valueOf();

//this.SUMATOTAL[0].Proteina=this.SumaDesayuno[0].Proteina.valueOf()+
//this.SumaColacionMatutina[0].Proteina.valueOf()+this.SumaComida[0].Proteina.valueOf()+
//this.SumaColacionVespertina[0].Proteina.valueOf()+this.SumaCena[0].Proteina.valueOf();

//this.SUMATOTAL[0].Lipidos=this.SumaDesayuno[0].Lipidos.valueOf()+
//this.SumaColacionMatutina[0].Lipidos.valueOf()+this.SumaComida[0].Lipidos.valueOf()+
//this.SumaColacionVespertina[0].Lipidos.valueOf()+this.SumaCena[0].Lipidos.valueOf();

//this.SUMATOTAL[0].HidratosDeCarbono=this.SumaDesayuno[0].HidratosDeCarbono.valueOf()+
//this.SumaColacionMatutina[0].HidratosDeCarbono.valueOf()+this.SumaComida[0].HidratosDeCarbono.valueOf()+
//this.SumaColacionVespertina[0].HidratosDeCarbono.valueOf()+this.SumaCena[0].HidratosDeCarbono.valueOf();

//this.SUMATOTAL[0].Fibra=this.SumaDesayuno[0].Fibra.valueOf()+
//this.SumaColacionMatutina[0].Fibra.valueOf()+this.SumaComida[0].Fibra.valueOf()+
//this.SumaColacionVespertina[0].Fibra.valueOf()+this.SumaCena[0].Fibra.valueOf();

//this.SUMATOTAL[0].VitaminaA=this.SumaDesayuno[0].VitaminaA.valueOf()+
//this.SumaColacionMatutina[0].VitaminaA.valueOf()+this.SumaComida[0].VitaminaA.valueOf()+
//this.SumaColacionVespertina[0].VitaminaA.valueOf()+this.SumaCena[0].VitaminaA.valueOf();

//this.SUMATOTAL[0].AcidoAscorbico=this.SumaDesayuno[0].AcidoAscorbico.valueOf()+
//this.SumaColacionMatutina[0].AcidoAscorbico.valueOf()+this.SumaComida[0].AcidoAscorbico.valueOf()+
//this.SumaColacionVespertina[0].AcidoAscorbico.valueOf()+this.SumaCena[0].AcidoAscorbico.valueOf();

//this.SUMATOTAL[0].AcidoFolico=this.SumaDesayuno[0].AcidoFolico.valueOf()+
//this.SumaColacionMatutina[0].AcidoFolico.valueOf()+this.SumaComida[0].AcidoFolico.valueOf()+
//this.SumaColacionVespertina[0].AcidoFolico.valueOf()+this.SumaCena[0].AcidoFolico.valueOf();

//this.SUMATOTAL[0].Hierro=this.SumaDesayuno[0].Hierro.valueOf()+
//this.SumaColacionMatutina[0].Hierro.valueOf()+this.SumaComida[0].Hierro.valueOf()+
//this.SumaColacionVespertina[0].Hierro.valueOf()+this.SumaCena[0].Hierro.valueOf();

//this.SUMATOTAL[0].Potasio=this.SumaDesayuno[0].Potasio.valueOf()+
//this.SumaColacionMatutina[0].Potasio.valueOf()+this.SumaComida[0].Potasio.valueOf()+
//this.SumaColacionVespertina[0].Potasio.valueOf()+this.SumaCena[0].Potasio.valueOf();

//this.SUMATOTAL[0].IndiceGlicemico=this.SumaDesayuno[0].IndiceGlicemico.valueOf()+
//this.SumaColacionMatutina[0].IndiceGlicemico.valueOf()+this.SumaComida[0].IndiceGlicemico.valueOf()+
//this.SumaColacionVespertina[0].IndiceGlicemico.valueOf()+this.SumaCena[0].IndiceGlicemico.valueOf();

//this.SUMATOTAL[0].CargaGlicemica=this.SumaDesayuno[0].CargaGlicemica.valueOf()+
//this.SumaColacionMatutina[0].CargaGlicemica.valueOf()+this.SumaComida[0].CargaGlicemica.valueOf()+
//this.SumaColacionVespertina[0].CargaGlicemica.valueOf()+this.SumaCena[0].CargaGlicemica.valueOf();

//this.SUMATOTAL[0].AzucarPorEquivalente=this.SumaDesayuno[0].AzucarPorEquivalente.valueOf()+
//this.SumaColacionMatutina[0].AzucarPorEquivalente.valueOf()+this.SumaComida[0].AzucarPorEquivalente.valueOf()+
//this.SumaColacionVespertina[0].AzucarPorEquivalente.valueOf()+this.SumaCena[0].AzucarPorEquivalente.valueOf();

//this.SUMATOTAL[0].Calcio=this.SumaDesayuno[0].Calcio.valueOf()+
//this.SumaColacionMatutina[0].Calcio.valueOf()+this.SumaComida[0].Calcio.valueOf()+
//this.SumaColacionVespertina[0].Calcio.valueOf()+this.SumaCena[0].Calcio.valueOf();

//this.SUMATOTAL[0].Sodio=this.SumaDesayuno[0].Sodio.valueOf()+
//this.SumaColacionMatutina[0].Sodio.valueOf()+this.SumaComida[0].Sodio.valueOf()+
//this.SumaColacionVespertina[0].Sodio.valueOf()+this.SumaCena[0].Sodio.valueOf();

//this.SUMATOTAL[0].Selenio=this.SumaDesayuno[0].Selenio.valueOf()+
//this.SumaColacionMatutina[0].Selenio.valueOf()+this.SumaComida[0].Selenio.valueOf()+
//this.SumaColacionVespertina[0].Selenio.valueOf()+this.SumaCena[0].Selenio.valueOf();

//this.SUMATOTAL[0].Fosforo=this.SumaDesayuno[0].Fosforo.valueOf()+
//this.SumaColacionMatutina[0].Fosforo.valueOf()+this.SumaComida[0].Fosforo.valueOf()+
//this.SumaColacionVespertina[0].Fosforo.valueOf()+this.SumaCena[0].Fosforo.valueOf();

//this.SUMATOTAL[0].Colesterol=this.SumaDesayuno[0].Colesterol.valueOf()+
//this.SumaColacionMatutina[0].Colesterol.valueOf()+this.SumaComida[0].Colesterol.valueOf()+
//this.SumaColacionVespertina[0].Colesterol.valueOf()+this.SumaCena[0].Colesterol.valueOf();

//this.SUMATOTAL[0].AgSaturados=this.SumaDesayuno[0].AgSaturados.valueOf()+
//this.SumaColacionMatutina[0].AgSaturados.valueOf()+this.SumaComida[0].AgSaturados.valueOf()+
//this.SumaColacionVespertina[0].AgSaturados.valueOf()+this.SumaCena[0].AgSaturados.valueOf();

//this.SUMATOTAL[0].AgMonoinsaturados=this.SumaDesayuno[0].AgMonoinsaturados.valueOf()+
//this.SumaColacionMatutina[0].AgMonoinsaturados.valueOf()+this.SumaComida[0].AgMonoinsaturados.valueOf()+
//this.SumaColacionVespertina[0].AgMonoinsaturados.valueOf()+this.SumaCena[0].AgMonoinsaturados.valueOf();

//this.SUMATOTAL[0].AgPoliinsaturados=this.SumaDesayuno[0].AgPoliinsaturados.valueOf()+
//this.SumaColacionMatutina[0].AgPoliinsaturados.valueOf()+this.SumaComida[0].AgPoliinsaturados.valueOf()+
//this.SumaColacionVespertina[0].AgPoliinsaturados.valueOf()+this.SumaCena[0].AgPoliinsaturados.valueOf();

//this.SUMATOTAL[0].Etanol=this.SumaDesayuno[0].Etanol.valueOf()+
//this.SumaColacionMatutina[0].Etanol.valueOf()+this.SumaComida[0].Etanol.valueOf()+
//this.SumaColacionVespertina[0].Etanol.valueOf()+this.SumaCena[0].Etanol.valueOf();

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
