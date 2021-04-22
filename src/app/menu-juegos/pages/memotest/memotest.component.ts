import { style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
  
})
export class MemotestComponent implements OnInit {

  listaBanderas : Array<any> = [];
  listaBanderasDesordenada : Array<any> = [];
  listaAuxiliar : Array<any> = [];
  auxPrimero:any;
  primeraCarta : boolean= true;
  // opacity = 0;
  idSeleccionado : number = 0;
  constructor(private paises : PaisesService) {
    this.paises.obtenerImagenes().subscribe((fotos:any) =>{
      
      for (let index = 0; index < 6; index++) {
        const element = fotos[index];        
        let foto = element.flag;
        let tapa="../../../../assets/images/memotest.webp";
        this.listaBanderas.push({foto,index});
        this.listaBanderas.push({foto,index});
        this.listaAuxiliar.push({tapa,index});
        this.listaAuxiliar.push({tapa,index});
        
      }          
      this.listaAuxiliar.sort((a,b) => {return Math.random() - 0.5});
      console.info(this.listaBanderas);
      console.info(this.listaAuxiliar);
    })  
    
   }


   public darVuelta(item : any){
    let cerebro="../../../../assets/images/memotest.webp"

    this.listaBanderas.forEach(bandera => {
      if(bandera.index == item.index){
        item.tapa = bandera.foto;               
      }
    });

    if(this.primeraCarta == true){
      console.log('primera carta');
      this.auxPrimero = item;
      this.primeraCarta= false;

    }else{
      if(this.auxPrimero.index == item.index){
        console.log('gane');
        this.primeraCarta= true;
          this.auxPrimero='';

          let yaGano = this.listaAuxiliar.filter(element => element.tapa == cerebro);
          console.log(yaGano);

          if(yaGano.length == 0){
            Swal.fire({
                    icon: 'success',
                    text: 'Encontraste todas las banderas!',
                    title: 'GANASTE!'
                  })
          }
         
      }else{
        setTimeout(() => {
          item.tapa = cerebro;
          this.auxPrimero.tapa= cerebro;
          this.primeraCarta= true;
          this.auxPrimero='';
          console.log('perdiste');
        }, 500);
      
      }

    }
    
      
   }



  ngOnInit(): void {
  }

}
