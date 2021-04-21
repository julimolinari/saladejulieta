import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public inputEmail = '';
  public inputPass = '';
  
  public volverhome() : void{

    this.router.navigate(['/home']);
  }
  public registro() : void{

    this.router.navigate(['/registro']);
  }
  public iniciar() : void{

    this.servicioAut.inciarSesion(this.inputEmail,this.inputPass).then(resp => {
      console.log(resp);
      this.volverhome();
    }).catch(err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        text: 'Contraseña o Emai incorrectos, no se pudo iniciar sesión!',
        title: 'Oops...'
      })
    })
  }

  public ingresoRapido(user:string){
    if(user == 'admin'){
      this.inputEmail= 'admin@admin.com';
      this.inputPass='admin123';
    }else if(user=='test'){
      this.inputEmail= 'test@test.com';
      this.inputPass='test123';
    }
  }

  constructor(private router : Router,private servicioAut : AutenticacionService) { }

  ngOnInit(): void {
  }

}
