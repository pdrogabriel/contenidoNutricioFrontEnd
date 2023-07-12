/******************************************************************************
 * @Directora del proyecto: Sabina López Toledo                               *
 * @Coordinadora y Desarrolladora: Silviana Juárez Chalini                    *
 * @Desarrollador: Rolando Pedro Gabriel                                      *
 * Fecha de Creación: 22/04/2022                                              *
 * Fecha de Actualización: 12/07/2023                                         *
 * Descripción: Clase para registrar usuario del proyecto Contenido Nutricio  *
 *              Front-End.                                                    *
 *****************************************************************************/

import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario = new Usuario()
  /*form: Usuario = {
    username: '',
    email: '',
    password: ''
  };*/

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  //submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
   /* const data = {
      nombre: this.form.nombre,
      apellidoPaterno: this.form.apellidoPaterno,
      apellidoMaterno: this.form.apellidoMaterno,
      institucion: this.form.institucion,
      username: this.form.username,
      email: this.form.email,
      password: this.form.password
    };*/

    this.usuarioService.createUsuario(this.usuario)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            //this.submitted = true;
          },
          error: (e) => {
            console.error(e)
            this.errorMessage = e.error.message;
            this.isSignUpFailed = true;
          }
        });
  }

  /*newUsuario(): void {
    this.submitted = false;
    this.user = {
      username: '',
      email: '',
      password: ''
    };
  }*/

}
