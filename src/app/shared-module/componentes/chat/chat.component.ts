import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { BasededatosService } from 'src/app/servicios/basededatos.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  emailUsuario : string = '';
  idUsuario : string = '';  
  listadoMensajes : Array<Mensaje> = [];

  constructor(private auten : AutenticacionService,private db: BasededatosService) { 
    this.auten.currentUser().then((resp : any) =>{
      this.emailUsuario = resp.email;
      this.idUsuario = resp.uid;
     })

     this.db.traerMensaje().subscribe((mensajes:any) => {
       let auxMensaje;
       let auxListadoMensaje = new Array();

      for (let index = 0; index < mensajes.length; index++) {

        const element = mensajes[index];
        auxMensaje = new Mensaje(element.payload.doc.data().mensaje,element.payload.doc.data().fecha,element.payload.doc.data().usuario);

        auxListadoMensaje.push(auxMensaje);

      }

      this.listadoMensajes = auxListadoMensaje.sort((a, b) => a.fecha.localeCompare(b.fecha));
      
     
     })
  }

  ngOnInit(): void {
  }

  inputMensaje : string = '';
  mensaje : string = '';
  fechaMsj :  string= '';

  public enviarMensaje(){

    this.mensaje =  this.inputMensaje;
    this.fechaMsj = new Date().toLocaleString();
    
    let mensajeGuardado = new Mensaje(this.mensaje,this.fechaMsj,this.emailUsuario);

    this.db.crearMensaje(mensajeGuardado).then(resp => {
      console.log(resp);
    })

    this.inputMensaje = '';

  }

}
