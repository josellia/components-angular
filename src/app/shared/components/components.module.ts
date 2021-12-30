import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './inputs/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    InputComponent
  ]
})
export class ComponentsModule { }
