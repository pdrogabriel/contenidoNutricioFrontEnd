import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiempocomida',
  templateUrl: './tiempocomida.component.html',
  styleUrls: ['./tiempocomida.component.css']
})
export class TiempocomidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {   }

  exportaIdentificadorPaciente(): void {
     
    let IdentificadorPaciente="";
    let element =document.querySelector('input')?.value;

   if (element === '') {
    IdentificadorPaciente="analisisIngesta.xlsx";
  }else{
    let nombreLimpio;
      nombreLimpio = element+"";
      nombreLimpio= nombreLimpio.replace(/\s+/g, '');
      nombreLimpio= nombreLimpio.replace('á', 'a');
      nombreLimpio= nombreLimpio.replace('é', 'e');
      nombreLimpio= nombreLimpio.replace('í', 'i');
      nombreLimpio= nombreLimpio.replace('ó', 'o');
      nombreLimpio= nombreLimpio.replace('ú', 'u');
      nombreLimpio= nombreLimpio.replace('ñ', 'n');
      let ext:string = ".xlsx"
      IdentificadorPaciente=nombreLimpio+ext; 
  }
  // Se envía al almacenamiento local
  sessionStorage.setItem('nombreArchivo',IdentificadorPaciente);
  //alert("archivo: "+sessionStorage.getItem('nombreArchivo'));
   alert("Identificador del paciente registrado");
  }
}
