import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-actualizar-persona',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './actualizar-persona.component.html',
  styleUrl: './actualizar-persona.component.css'
})
export class ActualizarPersonaComponent implements OnInit{
  id:number;
  persona:Persona = new Persona();
  constructor(private personaService:PersonaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaService.obtenerPersonaPorId(this.id).subscribe(dato =>{
      this.persona = dato;
    },error => console.log(error));
  }

  irAListaPersonas(){
    this.router.navigate(['/personas']);
    alert('Persona actualizada');
  }

  onSubmit(){
    if(this.persona.estatus){
      this.persona.estatus = '1';
    }else{
      this.persona.estatus = '0';
    }
    this.personaService.actualizarPersona(this.id,this.persona).subscribe(dato => {
      this.irAListaPersonas();
    },error => console.log(error));
  }
}
