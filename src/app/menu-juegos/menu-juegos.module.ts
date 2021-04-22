import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuJuegosRoutingModule } from './menu-juegos-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { MenuJuegosComponent } from './menu-juegos.component';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { PiedrapapeltijeraComponent } from './pages/piedrapapeltijera/piedrapapeltijera.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MemotestComponent } from './pages/memotest/memotest.component';





@NgModule({ 
  imports: [
    CommonModule,
    MenuJuegosRoutingModule,
    SharedModuleModule
    
  ], declarations: [
    MenuJuegosComponent,
    TatetiComponent,
    PiedrapapeltijeraComponent,
    JuegosComponent,
    MemotestComponent
   
  ]
})
export class MenuJuegosModule { }
