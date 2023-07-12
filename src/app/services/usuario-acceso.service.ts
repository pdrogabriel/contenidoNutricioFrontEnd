
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/api/usuario/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioAccesoService {

  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(`${url}` + 'list');
  }

  getAcceso(username: String): Observable<any> {
    return this.http.get(`${url}acceso/${username}`);
  }
  
  deleteUsuario(id: Number): Observable<any> {
    return this.http.delete(`${url}delete/${id}`, { responseType: 'text' });
  }

  updateUsuario(id: Number, value: any): Observable<object> {
    return this.http.put(`${url}update/${id}`, value);
  }

  updateUsuarioRol(id: Number, value: any): Observable<object> {
    return this.http.put(`${url}updateUsuarioRol/${id}`, value);
  }


}