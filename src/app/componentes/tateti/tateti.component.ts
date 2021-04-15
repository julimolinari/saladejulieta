import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/clases/juego';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { BasededatosService } from 'src/app/servicios/basededatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  emailUsuario : string = '';
  idUsuario : string = '';

  constructor(private db: BasededatosService,private auten : AutenticacionService) { 
    this.auten.currentUser().then((resp : any) =>{
      this.emailUsuario = resp.email;
      this.idUsuario = resp.uid;
     })
  }

  ngOnInit(): void {
  }

  posiciones=[['-','-','-'],
              ['-','-','-'],
              ['-','-','-']];
  jugador='O';
  juegoTerminado:boolean=false;

  presion(fila:number,columna:number) {
    if (this.posiciones[fila][columna]=='-') {
      this.posiciones[fila][columna]=this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');      
      this.cambiarJugador();
    }
    this.verificarEmpate();
  }

  reiniciar() {
    for(let f=0;f<3;f++)
      for(let c=0;c<3;c++)
        this.posiciones[f][c]='-';
  }

  cambiarJugador() {
    if (this.jugador=='O')
      this.jugador='X';
    else
      this.jugador='O';    
  }
 

  verificarGano(ficha: string) {
    if (this.posiciones[0][0]==ficha && this.posiciones[0][1]==ficha && this.posiciones[0][2]==ficha){
      this.terminoJuego(ficha);
    }
    if (this.posiciones[1][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[1][2]==ficha){
      this.terminoJuego(ficha);
    }
    if (this.posiciones[2][0]==ficha && this.posiciones[2][1]==ficha && this.posiciones[2][2]==ficha){
      this.terminoJuego(ficha);
    }
    if (this.posiciones[0][0]==ficha && this.posiciones[1][0]==ficha && this.posiciones[2][0]==ficha){
      this.terminoJuego(ficha);
    }
    if (this.posiciones[0][1]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][1]==ficha){
      this.terminoJuego(ficha);
    }
    if (this.posiciones[0][2]==ficha && this.posiciones[1][2]==ficha && this.posiciones[2][2]==ficha){
      this.terminoJuego(ficha);
    }
    if (this.posiciones[0][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][2]==ficha){
      this.terminoJuego(ficha);
    }
    if (this.posiciones[0][2]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][0]==ficha){
      this.terminoJuego(ficha);
    }
  }


  public terminoJuego(ficha : string){
    Swal.fire({
      icon: 'success',
      title: 'GANASTE JUGADOR ' + ficha
    }).then(resp =>{
      this.reiniciar();
      this.guardarJuego('gano');
    })
    

  }

  public guardarJuego(resultado : string){
    let juego = new  Juego('Tateti',this.emailUsuario,this.idUsuario,resultado);
    this.db.crearJuego(juego).then(resp => {
      console.log(resp);
    })
  }


  public verificarEmpate(){
    let flag=false;
    for (let index = 0; index < this.posiciones.length; index++) {
      const element = this.posiciones[index];
      for (let index = 0; index < element.length; index++) {
        const casilla = element[index];
        if(casilla == '-'){
          flag=true;   
          break;
        }
      }
      
    }
    if(flag == false){
      console.log('empate');
      Swal.fire({
        icon: 'info',
        title: 'EMPATE! '
      }).then(resp =>{
        this.reiniciar();
        this.guardarJuego('empate');
      })    
    }
  }

}
