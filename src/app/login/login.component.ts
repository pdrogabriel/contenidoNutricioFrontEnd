import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UsuarioAccesoService } from '../services/usuario-acceso.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  isActive = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: String[] = [];
  
  constructor(private usuarioService:UsuarioService, private tokenStorage: TokenStorageService, private service: UsuarioAccesoService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

   

    this.usuarioService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

      


        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        alert('-----------------------')

        this.service.getAcceso(this.form.username).subscribe((acceso) => {
          alert(this.form.username + "--------<>>")
          if(acceso == 1){
            alert('acceso:----- ' + acceso)
            this.isActive = true;
          }
        });
        

        this.reloadPage();

        this.service.getAcceso(this.form.username).subscribe((acceso) => {
          alert(this.form.username + "--------<>>")
          if(acceso == 1){
            alert('acceso:----- ' + acceso)
            this.isActive = true;
          }
        });
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });

    

   
  }

  reloadPage(): void {
    
    this.service.getAcceso(this.form.username).subscribe((acceso) => {
      alert(this.form.username + "--------<>>")
      if(acceso == 1){
        alert('acceso:----- ' + acceso)
        this.isActive = true;
      }
    });

    window.location.reload();

    this.service.getAcceso(this.form.username).subscribe((acceso) => {
      alert(this.form.username + "--------<>>")
      if(acceso == 1){
        alert('acceso:----- ' + acceso)
        this.isActive = true;
      }
    });
  }  

}
