import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {

  constructor() { }

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
    }else if(valor=='piedra' && pcRespuesta=='tijera' || valor=='papel' && pcRespuesta=='piedra' || valor=='tijera' && pcRespuesta=='papel' ){
      Swal.fire({
        icon: 'success',
        text: valor+ ' VS ' + pcRespuesta,
        title: 'GANASTE!'
      })
    }else if(valor=='piedra' && pcRespuesta=='papel' || valor=='papel' && pcRespuesta=='tijera' || valor=='tijera' && pcRespuesta=='piedra' ){
      Swal.fire({
        icon: 'error',
        text: valor+ ' VS ' + pcRespuesta,
        title: 'Perdiste :('
      })
    }

  }

}
