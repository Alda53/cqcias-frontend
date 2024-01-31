import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PersonaService } from '../persona.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent implements OnInit{

  personas:Persona[];

  constructor(private personaServicio:PersonaService){}

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  private obtenerPersonas(){
    this.personaServicio.obtenerListaDePersonas().subscribe(dato=>{
      this.personas = dato;
    });
  }
}
