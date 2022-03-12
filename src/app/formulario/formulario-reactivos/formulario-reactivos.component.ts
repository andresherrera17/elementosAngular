import { invalid } from '@angular/compiler/src/render3/view/util';
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
      nombre: ['', [Validators.required, Validators.minLength(5)]],
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

  get usuarioNoValido() {
    return this.nombre?.invalid && this.nombre?.touched
  }

  getError(controlName: string) {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control?.touched && control.errors != null) {
      error = JSON.stringify(control?.errors)
    }
    return error;
  }

  get nombre(): AbstractControl | null { return this.formGroup.get('nombre') }

}
