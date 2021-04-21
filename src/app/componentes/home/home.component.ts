import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

usuario : string = '';

  constructor(private router : Router, private auten : AutenticacionService) { 
    console.log('home Current user');
    auten.currentUser().then((resp:any) =>{
      console.log(resp);
      if(resp != null){

        this.usuario = resp.email;
      }else{
        this.usuario = resp;
      }
    })
  }

  public ingresarJuegos(){
    if(this.usuario != null){
      this.router.navigate(['/menu/juegos']);
    }else{

      this.router.navigate(['/login']);
    }

  }

  ngOnInit(): void {
  }

}
