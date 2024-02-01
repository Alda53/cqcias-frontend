import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { NgFor, NgIf } from '@angular/common';
import { PersonaService } from '../persona.service';
import { ModalRegistroComponent } from '../modal-registro/modal-registro.component';
import { ServiceSwitchService } from '../services/service-switch.service';

@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [NgFor, ModalRegistroComponent, NgIf],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent implements OnInit{

  personas:Persona[];

  modalSwitch:boolean;

  constructor(private personaServicio:PersonaService, private modalSS:ServiceSwitchService){}

  ngOnInit(): void {
    this.obtenerPersonas();
    this.modalSS.$modal.subscribe((value)=>{this.modalSwitch=value})
  }

  openModal(){
    this.modalSwitch=true;
  }

  private obtenerPersonas(){
    this.personaServicio.obtenerListaDePersonas().subscribe(dato=>{
      this.personas = dato;
    });
  }
}
