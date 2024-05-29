import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
const url =  isDevMode() ? 'https://anamexapi.unsis.edu.mx/calculo/grupoalimento/' : 'https://anamexapi.unsis.edu.mx/calculo/grupoalimento/';

@Injectable({
  providedIn: 'root'
})
export class GrupoAlimentoService {

  constructor(private http:HttpClient) { }

  getAllGrupoAlimento(): Observable<any> {
    return this.http.get(`${url}`+'listar');
  }

  getAlimentoByGrupoAlimento(grupoAlimentoId: Number): Observable<any> {
    return this.http.get(`${url}`+'listarAlimentoByGrupoAlimento/'+grupoAlimentoId);
  }

  getAlimento(idAlimento: Number): Observable<any> {
    return this.http.get(`${url}`+'listarAlimento/'+idAlimento);
  }

  getAlimentoNutrientes(idAlimento: Number): Observable<any> {
    return this.http.get(`${url}`+'listarAlimentoNutrientes/'+idAlimento);
  }
}