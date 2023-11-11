import { Component, Input } from '@angular/core';
import { NumericEvent } from '../../interfaces/numeric-event.type';

@Component({
  selector: 'numberic-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styles: [],
})
export class CurrencyPipeComponent {
  @Input()
  public isCollapsed: boolean = true;

  public value: number = 4984987.19487;

  onValueChange(event: NumericEvent): void {
    this.value = event.value;
  }
}
