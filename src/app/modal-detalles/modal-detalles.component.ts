import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceSwitchService } from '../services/service-switch.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-detalles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-detalles.component.html',
  styleUrl: './modal-detalles.component.css'
})
export class ModalDetallesComponent implements OnInit{
  id:number;
  persona:Persona = new Persona();
  constructor(private personaService: PersonaService, private modalSS:ServiceSwitchService){}

  ngOnInit(): void {
    this.modalSS.currentId.subscribe(id=>{
      this.id = id;

      this.personaService.obtenerPersonaPorId(this.id).subscribe(dato =>{
        this.persona = dato;
      },error => console.log(error));
    });
  }

  cerrarDetalles(){
    console.log("yo debo cerrar");
    this.modalSS.$modalDetalles.emit(false);
  }
}
