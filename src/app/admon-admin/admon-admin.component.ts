import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admon-admin',
  templateUrl: './admon-admin.component.html',
  styleUrls: ['./admon-admin.component.css']
})
export class AdmonAdminComponent implements OnInit {
  //active = 1;

  constructor() { }

  ngOnInit(): void {
  }


  // Silviana: Función dónde se borra la fila del botón presionado
  eliminarFila(index: Number) {
    document.getElementsByTagName("table")[0].setAttribute("id","tableid");
    let tabla = document.getElementById("usuarioAcceso-tble");
    let table = document.querySelector("table");
    table?.deleteRow(Number(index));
  }

}