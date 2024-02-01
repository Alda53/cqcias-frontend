import { Component } from '@angular/core';
import { ServiceSwitchService } from '../services/service-switch.service';
import { FormsModule } from '@angular/forms';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-modal-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-registro.component.html',
  styleUrl: './modal-registro.component.css'
})
export class ModalRegistroComponent {

  persona : Persona = new Persona();

  constructor(private personaService:PersonaService ,private modalSS:ServiceSwitchService){}

  guardarPersona(){
    if(this.persona.estatus!== null && this.persona.estatus!== undefined && this.persona.estatus !== '0'){
      this.persona.estatus = '1';
    }else{
      this.persona.estatus = '0';
    }

    this.personaService.registrarPersona(this.persona).subscribe(dato => {
      this.modalSS.$modal.emit(false);
      window.location.reload();
    }, error => console.log(error));
  }

  oSend(){
    this.guardarPersona();
  }
}
