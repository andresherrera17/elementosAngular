import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    let nombre = "Andres Herrera";
    const hoy = new Date().toISOString().substring(0, 10);
    this.formGroup = this.formBuilder.group({
      fecha: hoy,
      nombre: [nombre, [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
      contrasena: ['', [Validators.required, Validators.minLength(6), this.validarContrasena]],
      direccion:
        this.formBuilder.group({
          calle: ['', Validators.required],
          avenida: ['', Validators.required]
        })
    })
  }

  validarContrasena(control: AbstractControl) {
    const contrasena = control.value;
    let error = null;
    if (!contrasena.includes('$')) {
      error = { pesos: 'Es requerido el signo $' }
    }
    if (!parseFloat(contrasena[0])) {
      error = { ...error, number: 'Debe empezar con un numero' }
    }
    return error
  }

  guardar() {
    console.log(this.formGroup);
  }

}
