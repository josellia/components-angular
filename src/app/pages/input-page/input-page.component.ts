import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss'],
})
export class InputPageComponent implements OnInit {
  formData!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }
  ngOnInit(): void {
    this.formData = this.fb.group({
      cpf: [''],
      phone: [''],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(256),
        ],
      ],
    });
  }

  submitForm(): void {
    if (this.formData.invalid) {
      return;
    }

    alert('SUCESSO' + JSON.stringify(this.formData.value, null, 4));
  }

  clearForm(): void {
    this.formData.reset();
  }
}

// Best Way To Use markAllAsTouched in Angular Forms
