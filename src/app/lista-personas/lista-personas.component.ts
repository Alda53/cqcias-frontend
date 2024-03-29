import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { NgFor, NgIf } from '@angular/common';
import { PersonaService } from '../persona.service';
import { ModalRegistroComponent } from '../modal-registro/modal-registro.component';
import { ServiceSwitchService } from '../services/service-switch.service';
import { Router } from '@angular/router';
import { ModalDetallesComponent } from '../modal-detalles/modal-detalles.component';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [NgFor, ModalRegistroComponent, ModalDetallesComponent, NgIf, DataTablesModule],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent implements OnInit{

  personas:Persona[];

  modalSwitch:boolean;
  detallesSwitch:boolean;

  constructor(private personaServicio:PersonaService, private router:Router, private modalSS:ServiceSwitchService){}

  criterioOrden: string;
  ordenAscendente = true;

  // Método para cambiar el criterio de orden
  cambiarCriterioOrden(criterio: string): void {
    if (this.criterioOrden === criterio) {
      // Si hacemos clic en el mismo criterio, invertimos el orden
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      // Si cambiamos a un nuevo criterio, lo establecemos y orden ascendente por defecto
      this.criterioOrden = criterio;
      this.ordenAscendente = true;
    }
  }

  // Método para aplicar la clasificación
  aplicarClasificacion(personas: any[]): any[] {
    if (!this.criterioOrden) {
      // Si no hay criterio de orden, devolvemos el arreglo sin cambios
      return personas;
    }

    // Aplicamos la clasificación
    return personas.sort((a, b) => {
      const valorA = a[this.criterioOrden];
      const valorB = b[this.criterioOrden];

      // Operador ternario para determinar el orden ascendente o descendente
      return this.ordenAscendente ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
    });
  }

  ngOnInit(): void {
    this.obtenerPersonas();
    this.modalSS.$modal.subscribe((value)=>{this.modalSwitch=value})
  }

  openModal(){
    this.modalSwitch=true;
  }

  detallesModal(id:number){
    this.detallesSwitch=true;
    this.modalSS.changeId(id);
  }

  //Update persona
  actualizarPersona(id:number){
    this.router.navigate(['actualizar-persona', id]);
  }

  //Get personas
  private obtenerPersonas(){
    this.personaServicio.obtenerListaDePersonas().subscribe(dato=>{
      this.personas = dato;
    });
  }
}
