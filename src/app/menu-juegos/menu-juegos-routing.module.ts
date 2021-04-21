import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { PiedrapapeltijeraComponent } from './pages/piedrapapeltijera/piedrapapeltijera.component';




const routes: Routes = [
  { path: 'piedrapapeltijera', component: PiedrapapeltijeraComponent },
  { path: 'tateti', component: TatetiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuJuegosRoutingModule { }
