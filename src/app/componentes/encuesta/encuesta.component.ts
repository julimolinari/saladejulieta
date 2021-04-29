import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public forma!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spaceValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'telefono': ['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]],
      'sexo': ['', Validators.required],
      'email': ['', [Validators.required]],
      'terminos': ['', Validators.required]
    });
  }

  public aceptar(): void {
    console.log(this.forma.getRawValue());//devuelve json
    console.log(this.forma.get('nombre')!.value);
    console.log(this.forma.controls['apellido'].value);

  }

  private spaceValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const espacios = nombre.includes(' ');

    if (espacios) {
      return {
        contieneEspacios: true
      };
    } else {
      return null;
    }
  }
  private letrasValidator(control: AbstractControl): null | object {
    const numero = <string>control.value;
    const espacios = numero.includes('/[0-9\+\-\ ]/');

    if (espacios) {
      return {
        contieneLetras: true
      };
    } else {
      return null;
    }
  }

 
}
