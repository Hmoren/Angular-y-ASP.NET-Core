import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core'
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  @Input() modelo: actorCreacionDTO;

  @Output() submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['',{Validators:[Validators.required],
      },
    ],
    fechaNacimiento: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

}
