import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  form: Usuario = {
    username: '',
    email: '',
    password: ''
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  //submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const data = {
      username: this.form.username,
      email: this.form.email,
      password: this.form.password
    };

    this.usuarioService.createUsuario(data)
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
