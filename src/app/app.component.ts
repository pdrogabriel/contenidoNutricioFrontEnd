/******************************************************************************
 * @Directora del proyecto: Sabina López Toledo                               *
 * @Coordinadora y Desarrolladora: Silviana Juárez Chalini                    *
 * @Desarrollador: Rolando Pedro Gabriel                                      *
 * Fecha de Creación: 22/04/2022                                              *
 * Fecha de Actualización: 11/07/2023                                         *
 * Descripción: Clase principal del proyecto Contenido Nutricio Front-End     *
 *****************************************************************************/

import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { UsuarioAccesoService } from './services/usuario-acceso.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANAMEX';

  isAvailable = false
  isActive = false;

  private roles: string[] = []; // No dejar en public
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  rol?: String;

  constructor(private tokenStorageService: TokenStorageService, private service: UsuarioAccesoService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();


    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.roles[0] == "ROLE_ADMIN" ? this.isAvailable = true : this.isAvailable = false; 
     
      this.service.getAcceso(user.username).subscribe((acceso) => {
        if(acceso == 1){
          this.isActive = true;
        }
      });

      if(this.roles[0] == "ROLE_ADMIN"){
        this.isActive = true; 
      } 

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
