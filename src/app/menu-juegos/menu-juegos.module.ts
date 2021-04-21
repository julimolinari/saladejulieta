import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuJuegosRoutingModule } from './menu-juegos-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { MenuJuegosComponent } from './menu-juegos.component';





@NgModule({ 
  imports: [
    CommonModule,
    MenuJuegosRoutingModule,
    SharedModuleModule
    
  ], declarations: [
    MenuJuegosComponent
   
  ]
})
export class MenuJuegosModule { }
