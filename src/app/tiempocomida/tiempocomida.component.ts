import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiempocomida',
  templateUrl: './tiempocomida.component.html',
  styleUrls: ['./tiempocomida.component.css']
})
export class TiempocomidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  name = 'identificadorPaciente.json';
  exportName(): void {
    let element = document.getElementById('idInputIdentificaPaciente');
    //String IdentificadorPAciente="";


    //const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    //const book: XLSX.WorkBook = XLSX.utils.book_new();
    //XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    //XLSX.writeFile(book, this.name);
  }

}
