import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import Swal from 'sweetalert2';
import { BasededatosService } from 'src/app/servicios/basededatos.service';
import { Usuario } from 'src/app/clases/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public inputEmail = '';
  public inputPass = '';
  public inputUsuario = '';
  public inputDNI = '';
  public formulario: FormGroup;
  public volverhome(): void {

    this.router.navigate(['/home']);
  }
  public registrate(): void {
    console.log(this.inputEmail);
    console.log(this.inputPass);
    if (this.inputEmail != null && this.inputPass != null) {
      let user;
      this.servicioAut.registrarUsuario(this.inputEmail, this.inputPass).then((resp: any) => {
        console.log(resp);

        user = new Usuario(this.inputEmail, this.inputPass, this.inputUsuario, this.inputDNI);
        this.db.crearUsuario(user, resp.user.uid).then(res => {



        });
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

  constructor(private router: Router, private servicioAut: AutenticacionService, private db: BasededatosService) {
    this.formulario = new FormGroup({
      inputEmail: new FormControl(null, Validators.email),
      inputPassword: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

}
