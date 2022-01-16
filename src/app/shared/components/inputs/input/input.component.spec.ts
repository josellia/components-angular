import {  ComponentFixture, TestBed } from "@angular/core/testing";
import { Component,  DebugElement } from '@angular/core';
import { InputComponent } from "./input.component";
import { By } from "@angular/platform-browser";
import { InputPageComponent } from "src/app/pages/input-page/input-page.component";
import { FormGroup, FormsModule } from "@angular/forms";

@Component({
  template: `
  <div [formGroup]="formGroup">
  <app-input
  label="Cpf"
></app-input>
  </div>
  `
})
class FakeComponet {
  formGroup!: FormGroup;
  label = '' ;
}

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let fake: FakeComponet;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations:[InputComponent, FakeComponet]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input label', () => {
  component.label = 'Cpf';
  fixture.detectChanges();
  expect(fixture.nativeElement.textContent).toBe('Cpf')
  });

  it('should other form test @Input label', () => {

  })
});

// it('should name in input', () => {
//   fixture.detectChanges();

//   const inEl = fixture.debugElement.query(By.css('input'));
//   expect(inEl.nativeElement.type).toBe('text');
// })

/*
Fixture: recebe o tipo  ComponentFixture que é um equipamento de teste para interagir com o 
componente criado e seu elemento corresponde.

DebugElement: é uma classe do angular que contém referencias e métodos relevantes para
investigar um elemento ou componente
 */