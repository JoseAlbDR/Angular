import { Component, Input } from '@angular/core';

@Component({
  selector: 'numbers-numeric-input',
  templateUrl: './numeric-input.component.html',
  styles: [],
})
export class NumericInputComponent {
  @Input()
  public title: string = '';

  @Input()
  public type: string = '';

  @Input()
  public value: number = 0;

  public onFocusOut(event: FocusEvent, type: string) {
    if (event?.target instanceof HTMLInputElement) {
      if (+event.target.value === 0) {
        if (type === 'net') this.value = 2567789.5567;
        if (type === 'gross') this.value = 4984987.19487;
      }
    }
  }
}
