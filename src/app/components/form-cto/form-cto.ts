import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cto, CtoService } from '../../service/cto-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-cto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-cto.html',
  styleUrl: './form-cto.scss',
})
export class FormCto {

  form!: FormGroup;

  ctos: Cto[] = [];

  constructor(
    private fb: FormBuilder,
    private ctoService: CtoService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      longitude: [null, Validators.required],
      latitude: [null, Validators.required],
      modelId: [null, Validators.required],
    });
  }

  criarCto() {
    this.ctoService.create(this.form.value).subscribe({
      next: () => {
        alert('CTO created successfully');
        this.form.reset();
      },
      error: err => {
        console.error(err);
        alert('Error creating CTO');
      }
    });
  }

  listarCtos() {
    this.ctoService.findAll().subscribe({
      next: data => {
        this.ctos = data;
        console.log('Lista carregada', data);
      },
      error: err => console.error(err)
    });
  }
}
