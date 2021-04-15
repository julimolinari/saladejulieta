import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/clases/juego';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { BasededatosService } from 'src/app/servicios/basededatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {
  emailUsuario : string = '';
  idUsuario : string = '';
  resultado : string = '';
  constructor(private db: BasededatosService,private auten : AutenticacionService) { 
   this.auten.currentUser().then((resp : any) =>{
    this.emailUsuario = resp.email;
    this.idUsuario = resp.uid;
   })


  }

  ngOnInit(): void {
  }


  public jugar(valor : string){

    var pcEleccion = ["piedra", "papel", "tijera"];
    console.log(valor);
    

    var pcRespuesta = pcEleccion[Math.floor(Math.random() * pcEleccion.length)];
    console.log(pcRespuesta);

    if(valor == pcRespuesta){
      Swal.fire({
        icon: 'info',
        text: valor+ ' VS ' + pcRespuesta,
        title: 'Es un empate!'
      })
      this.resultado = 'empate';
    }else if(valor=='piedra' && pcRespuesta=='tijera' || valor=='papel' && pcRespuesta=='piedra' || valor=='tijera' && pcRespuesta=='papel' ){
      Swal.fire({
        icon: 'success',
        text: valor+ ' VS ' + pcRespuesta,
        title: 'GANASTE!'
      })
      this.resultado = 'gano';
    }else if(valor=='piedra' && pcRespuesta=='papel' || valor=='papel' && pcRespuesta=='tijera' || valor=='tijera' && pcRespuesta=='piedra' ){
      Swal.fire({
        icon: 'error',
        text: valor+ ' VS ' + pcRespuesta,
        title: 'Perdiste :('
      })
      this.resultado = 'perdio';
    }
    let juego = new  Juego('Piedra, Papel o Tijera',this.emailUsuario,this.idUsuario,this.resultado);
    this.db.crearJuego(juego).then(resp => {
      console.log(resp);
    })

  }

}
