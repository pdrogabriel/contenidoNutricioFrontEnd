import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UsuarioServiceTestService } from '../services/usuario-service-test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  content?: string;

  constructor(private userService: UsuarioServiceTestService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
