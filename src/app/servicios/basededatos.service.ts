import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable, fromPromise } from 'rxjs';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';




@Injectable({
  providedIn: 'root'
})
export class BasededatosService {

  constructor(private db : AngularFirestore) {}



  public crearUsuario(user : Usuario, id : string)  {
    return this.db.collection("usuarios").doc(id).set(user.toJSON());

  }

}
function promiseSrc(promiseSrc: any) {
  throw new Error('Function not implemented.');
}

