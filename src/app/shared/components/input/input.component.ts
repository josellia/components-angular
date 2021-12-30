import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent  {
  @Input() placeholder!: string;
  @Input() class!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!:string;
  @Input() mask!:string;
  @Input() label!: string;
  @Input() for!:string;
  @Input() id!: string;

  constructor() { }



}
