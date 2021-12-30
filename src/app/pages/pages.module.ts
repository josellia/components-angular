import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPageComponent } from './input-page/input-page.component';


import { ComponentsModule } from '../shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    InputPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxMaskModule.forRoot(),
    ComponentsModule
  ],
  exports:[
    InputPageComponent
  ]
})
export class PagesModule { }
