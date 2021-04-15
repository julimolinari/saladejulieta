import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable, fromPromise } from 'rxjs';
import { Observable } from 'rxjs';
import { Juego } from '../clases/juego';
import { Mensaje } from '../clases/mensaje';
import { Usuario } from '../clases/usuario';




@Injectable({
  providedIn: 'root'
})
export class BasededatosService {

  constructor(private db : AngularFirestore) {}



  public crearUsuario(user : Usuario, id : string)  {
    return this.db.collection("usuarios").doc(id).set(user.toJSON());

  }

  public crearJuego(juego : Juego)  {
    return this.db.collection("juegos").add(juego.toJSON());

  }

  public crearMensaje(mensaje : Mensaje)  {
    return this.db.collection("mensajes").add(mensaje.toJSON());

  }

  
  public traerMensaje()  {
    return this.db.collection("mensajes").snapshotChanges();

  }

 

}


