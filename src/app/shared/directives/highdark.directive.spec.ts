import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HighdarkDirective } from "./highdark.directive";

@Component({
  template: `
  <h2 highdark="purple">Something purple</h2>
  <h2 highdark>Bg default</h2>
  <input #asInput [highdark]="asInput.value" value="yellow"/>
  `
})

class FakeComponet{}

let fixture: ComponentFixture<FakeComponet>;
let des: DebugElement[];
let bareH2: DebugElement;

describe('highdark directive', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations:[HighdarkDirective, FakeComponet]
    }).createComponent(FakeComponet);
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.directive(HighdarkDirective));
    bareH2 = fixture.debugElement.query(By.css('h2:not([highdark]'));
  });

  it('should have three highdarkted elements', () => {
    expect(bareH2.properties.customProperty).toBeUndefined();
  });

  it('should color first element h2 is background purple', () => {
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('purple');
  });

  it('should color second element <h2> background default', () => {
   const dir = des[1].injector.get(HighdarkDirective) as HighdarkDirective;
   const bgColor = des[1].nativeElement.style.backgroundColor;
   expect(bgColor).toBe(dir.defaultColor);
  });

  it('should bind input background to value color', () => {
    const input = des[2].nativeElement as HTMLInputElement;
    expect(input.style.backgroundColor).toBe('yellow');
    input.value = 'green';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.style.backgroundColor).toBe('green');
  });

});