import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { PiedrapapeltijeraComponent } from './pages/piedrapapeltijera/piedrapapeltijera.component';
import { MenuJuegosComponent } from './menu-juegos.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MemotestComponent } from './pages/memotest/memotest.component';




const routes: Routes = [
  
  { path: 'juegos', component: JuegosComponent },
  { path: 'piedrapapeltijera', component: PiedrapapeltijeraComponent },
  { path: 'memotest', component: MemotestComponent },
  { path: 'tateti', component: TatetiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuJuegosRoutingModule { }
