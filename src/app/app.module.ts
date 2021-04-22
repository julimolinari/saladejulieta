import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RegistroComponent } from './componentes/registro/registro.component';

import { SharedModuleModule } from './shared-module/shared-module.module';
import { HttpClientModule } from '@angular/common/http';
// import { TatetiComponent } from './componentes/tateti/tateti.component';
// import { PiedrapapeltijeraComponent } from './componentes/piedrapapeltijera/piedrapapeltijera.component';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    SharedModuleModule,
    HttpClientModule
  ],
  exports: [
 
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    RegistroComponent
 
    // TatetiComponent,
    // PiedrapapeltijeraComponent,    
  ],
  providers: []
})
export class AppModule { }
