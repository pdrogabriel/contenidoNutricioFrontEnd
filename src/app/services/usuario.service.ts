import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  login(username: String, password: String): Observable<any>{
    return this.http.post(`${url}` + 'signin', {username, password}, httpOptions);
  }

  createUsuario(data: Object): Observable<Object> {
    return this.http.post(`${url}` + 'signup', data, httpOptions);
  }

}
