import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  // Endpoint de Personas
  private baseURL = "http://localhost:8080/api/personas";

  constructor(private httpClient : HttpClient) { }

  //Metodo obtener personas
  obtenerListaDePersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }

}
