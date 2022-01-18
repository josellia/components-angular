import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { InputPageComponent } from 'src/app/pages/input-page/input-page.component';
import { FormGroup, FormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();
  });

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
    expect(fixture.nativeElement.textContent).toBe('Cpf');
  });

  it('should correctly render the passed @Input placeholder', () => {
    component.placeholder = 'Your CPF';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.placeholder).toBe('Your CPF');
    });
  });

  it('should corretly render the passed @Input mask', () => {
    const property = {
      mask: "(999) 999-9999"
    }
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
