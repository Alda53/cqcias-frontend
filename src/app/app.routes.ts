import { Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';

export const routes: Routes = [
    {path: 'personas', component:ListaPersonasComponent},
    {path: '', redirectTo:'personas', pathMatch:'full'},
    {path: 'actualizar-persona/:id', component:ActualizarPersonaComponent}
];
