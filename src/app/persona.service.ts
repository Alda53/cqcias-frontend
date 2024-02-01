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

  //Método registro
  registrarPersona(persona:Persona): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, persona)
  }

  //Método update
  actualizarPersona(id:number,persona:Persona): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, persona);
  }

  //Método obtener por ID
  obtenerPersonaPorId(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}/${id}`);
  }

}
