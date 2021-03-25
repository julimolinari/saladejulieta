import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
