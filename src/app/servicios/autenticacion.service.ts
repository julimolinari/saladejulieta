import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private auten:AngularFireAuth) { }

  public inciarSesion(email:string,password:string)  {
    return this.auten.signInWithEmailAndPassword(email,password);

  }

  public cerrarsesion()  {
    return this.auten.signOut();

  }

  public registrarUsuario(email:string,password:string)  {
    return this.auten.createUserWithEmailAndPassword(email,password);
  }

  public currentUser(){
    return this.auten.currentUser;
  }


}
