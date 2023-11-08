import { Component } from '@angular/core';
import { NumericEvent } from '../../interfaces/numeric-event.type';

@Component({
  selector: 'numbers-percentage-pipe',
  templateUrl: './percentage-pipe.component.html',
  styles: [],
})
export class PercentageComponent {
  public percentage: number = 0.4567;

  onValueChange(event: NumericEvent): void {
    this.percentage = event.value;
  }
}
