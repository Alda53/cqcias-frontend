import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent implements OnInit{

  personas:Persona[];

  constructor(){}

  ngOnInit(): void {
    this.personas=[{
      "id_persona":1,
      "nombre":"Alda",
      "primer_apellido":"Cruz",
      "segundo_apellido":"Mateo",
      "telefono":"4425975988",
      "estatus":"1",
      "fecha_ins":new Date("2022-01-28"),
      "fecha_upd":new Date("2022-01-28")
    },
    {
      "id_persona":2,
      "nombre":"Alda",
      "primer_apellido":"Cruz",
      "segundo_apellido":"Mateo",
      "telefono":"4425975988",
      "estatus":"1",
      "fecha_ins":new Date("2022-01-28"),
      "fecha_upd":new Date("2022-01-28")
    }
  ];
  }

}
