import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { PiedrapapeltijeraComponent } from './componentes/piedrapapeltijera/piedrapapeltijera.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quiensoy', component: QuienSoyComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'juegos', component: JuegosComponent},
  {path: 'piedrapapeltijera', component: PiedrapapeltijeraComponent},
  {path: 'tateti', component: TatetiComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
