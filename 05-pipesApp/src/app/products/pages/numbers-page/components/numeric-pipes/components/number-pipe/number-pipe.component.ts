import { Component, Input } from '@angular/core';
import { NumericEvent } from '../../interfaces/numeric-event.type';

@Component({
  selector: 'numbers-number-pipe',
  templateUrl: './number-pipe.component.html',
  styles: [],
})
export class NumberPipeComponent {
  public value: number = 2567789.5567;

  onValueChange(event: NumericEvent): void {
    this.value = event.value;
  }
}
