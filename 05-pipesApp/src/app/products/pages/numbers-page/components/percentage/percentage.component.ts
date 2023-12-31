import { Component, Input } from '@angular/core';
import { NumericEvent } from '../../interfaces/numeric-event.type';

@Component({
  selector: 'numeric-percentage-pipe',
  templateUrl: './percentage-pipe.component.html',
  styles: [],
})
export class PercentageComponent {
  @Input()
  public isCollapsed: boolean = true;

  @Input()
  public title: string = '';

  @Input()
  public name: string = '';

  public percentage: number = 0.4567;

  onValueChange(event: NumericEvent): void {
    this.percentage = event.value;
  }
}
