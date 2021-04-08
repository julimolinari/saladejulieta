import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public inputEmail = '';
  public inputPass = '';
  public formulario : FormGroup;
  public volverhome() : void{

    this.router.navigate(['/home']);
  }
  public registrate() : void{
console.log(this.inputEmail);
    if(this.inputEmail != null && this.inputPass != null){
      this.servicioAut.registrarUsuario(this.inputEmail,this.inputPass).then(resp => {
        console.log(resp);
        this.volverhome();
      }).catch(err => {
        Swal.fire({
          icon: 'error',
          text: 'Contraseña o Emai invalidos, no se pudo registrar al usuario!',
          title: 'Oops...'
        })
      })
    }
  }

  constructor(private router : Router, private servicioAut : AutenticacionService) { 
    this.formulario = new FormGroup({
      inputEmail : new FormControl(null,Validators.email),
      inputPassword : new FormControl(null,Validators.required)
    })
  }

  ngOnInit(): void {
  }

}
