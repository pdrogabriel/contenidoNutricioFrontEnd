/******************************************************************************
 * @Directora del proyecto: Sabina López Toledo                               *
 * @Coordinadora y Desarrolladora: Silviana Juárez Chalini                    *
 * @Desarrollador: Rolando Pedro Gabriel                                      *
 * Fecha de Creación: 22/04/2022                                              *
 * Fecha de Actualización: 12/07/2023                                         *
 * Descripción: Clase para asignar permisos a los diferentes usuarios del     *
 *              sistema como administrador o usuario normal del proyecto      *
 *              Contenido Nutricio Front-End.                                 *
 *              Para implementar el paginador de la tabla, se tomó el ejemplo *
 *              del siguiente tutorial:                                       *
 *https://therichpost.com/angular-16-datatable-with-print-csv-excel-copy-buttons/
 *              Para este caso se instalaron las siguientes dependencias:     *
 *                                                                            *
 *              npm install jquery --save                                     *
 *              npm install datatables.net --save                             *
 *              npm install datatables.net-dt --save                          *
 *              npm install angular-datatables --save                         *
 *              npm install @types/jquery --save-dev                          *
 *              npm install @types/datatables.net --save-dev                  *
 *              npm install bootstrap --save                                  *
 *              npm i @popperjs/core                                          *
 *              npm install datatables.net-buttons --save                     *
 *              npm install datatables.net-buttons-dt --save                  *
 *              npm install @types/datatables.net-buttons --save-dev          *
 *              npm install jszip --save                                      *
 *****************************************************************************/

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsuarioAccesoService } from '../services/usuario-acceso.service';

@Component({
  selector: 'app-admon-solicita',
  templateUrl: './admon-solicita.component.html',
  styleUrls: ['./admon-solicita.component.css']
})
export class AdmonSolicitaComponent implements OnInit {

  listaUsuario: Usuario[] = [];
  Usuario = new Usuario();

  constructor(private service: UsuarioAccesoService) {
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.service.getUsuarios()
      .subscribe(
        data => {
          this.listaUsuario = data

          setTimeout(() => {
            $('#datatableexample').DataTable({
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              lengthMenu: [5, 10, 25],
              dom: 'Blfrtip'
            });
          }, 1);
        },
        error => {
          console.log(error)
        }
      )
  }

  deleteUsuario(id: Number) {
    const eliminar = confirm("¿Deseas eliminar este registro?");
    if (eliminar) {
      this.service.deleteUsuario(id)
        .subscribe(() => {
          this.getUsuarios();
        });
    }
  }

  updateUsuario(usuario: Usuario): void {
    usuario.acceso == 0 ? usuario.acceso = 1 : usuario.acceso = 0;

    this.service.updateUsuario(usuario.id, usuario).subscribe({
      next: (res) => {
        this.getUsuarios();
      },
      error: (e) => console.error(e)
    });
  }

  cambiarRolUsuario(usuario: Usuario): void {
    const rol = usuario.roles[0].name == 'ROLE_USER' ? 3 : 1;
    this.service.updateUsuarioRol(rol, usuario).subscribe({
      next: (res) => {
        this.getUsuarios();
      },
      error: (e) => console.error(e)
    });
  }
}
