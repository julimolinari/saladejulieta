import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public ingresar() : void{

    this.router.navigate(['/login']);


  }
  public ingresarquien() : void{

    this.router.navigate(['/quiensoy']);


  }

  constructor(private router : Router, private auten : AutenticacionService) { 
    console.log('homeeee');
    auten.currentUser().then(resp =>{
      console.log(resp);
    })
  }

  ngOnInit(): void {
  }

}
