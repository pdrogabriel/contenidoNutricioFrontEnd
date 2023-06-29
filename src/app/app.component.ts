import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contenidoNutricioFrontEnd';

  constructor(private tokenStorageService: TokenStorageService){

  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

// Datos de la sesión
saveData() {
    sessionStorage.setItem('name', 'Rana Hasnain');
}

}
