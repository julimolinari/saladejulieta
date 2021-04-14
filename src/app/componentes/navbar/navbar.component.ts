import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioActivo : string = '';
  constructor(private auten : AutenticacionService, private router : Router) {    

    console.log('navbar Current user');
    auten.currentUser().then((resp:any) =>{     
      console.log(resp);
      if(resp != null){
        this.usuarioActivo = resp.email;        
      }else{
        this.usuarioActivo = ''; 
      }
    })

    
  }

  public cerrarSesion(){
    this.auten.cerrarsesion().then(resp =>
      {
        this.router.navigate(['/login']);

      });
    

  }

  ngOnInit(): void {
  }

}
