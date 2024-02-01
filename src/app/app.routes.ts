import { Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';

export const routes: Routes = [
    {path: 'personas', component:ListaPersonasComponent},
    {path: '', redirectTo:'personas', pathMatch:'full'}
];
