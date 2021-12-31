import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidationErrorsService } from '../validation-errors.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() class!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() mask!: string;
  @Input() label!: string;
  @Input() for!: string;
  @Input() id!: string;

  constructor(public validationError: ValidationErrorsService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
