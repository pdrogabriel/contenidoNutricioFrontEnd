import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admon-solicita',
  templateUrl: './admon-solicita.component.html',
  styleUrls: ['./admon-solicita.component.css']
})
export class AdmonSolicitaComponent implements OnInit {

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
