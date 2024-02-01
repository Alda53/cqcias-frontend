import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';

const routes: Routes = [
  {path : 'personas',component:ListaPersonasComponent},
  {path:'',redirectTo:'personas',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
