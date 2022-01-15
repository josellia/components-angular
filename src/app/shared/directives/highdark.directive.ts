import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[highdark]',
})
export class HighdarkDirective implements OnChanges {
  defaultColor = 'rgb(128, 0, 128)';

  @Input('highdark') bgColor = '';

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor  =
      this.bgColor || this.defaultColor;
  }
}
