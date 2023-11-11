import { Component, Input } from '@angular/core';
import { NumericEvent } from '../../interfaces/numeric-event.type';

@Component({
  selector: 'numberic-percentage-pipe',
  templateUrl: './percentage-pipe.component.html',
  styles: [],
})
export class PercentageComponent {
  @Input()
  public isCollapsed: boolean = true;

  public percentage: number = 0.4567;

  onValueChange(event: NumericEvent): void {
    this.percentage = event.value;
  }
}
