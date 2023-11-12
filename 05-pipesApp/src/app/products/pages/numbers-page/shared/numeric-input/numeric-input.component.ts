import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output()
  onChange: EventEmitter<{ type: string; value: number }> = new EventEmitter();

  public onFocusOut(event: FocusEvent, type: string) {
    if (event?.target instanceof HTMLInputElement) {
      if (event.target.value === '') {
        if (type === 'net') this.value = 2567789.5567;
        if (type === 'gross') this.value = 4984987.19487;
        if (type === 'percent') this.value = 0.37895;
      }
      this.onChange.emit({ type: this.type, value: this.value });
    }
  }

  public changeValue(): void {
    this.onChange.emit({ type: this.type, value: this.value });
  }
}
