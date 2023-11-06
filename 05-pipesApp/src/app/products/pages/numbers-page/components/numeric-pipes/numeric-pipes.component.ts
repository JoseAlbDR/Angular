import { Component } from '@angular/core';

@Component({
  selector: 'numbers-numeric-pipes',
  templateUrl: './numeric-pipes.component.html',
  styles: [],
})
export class NumericPipesComponent {
  public netSales: number = 2567789.5567;
  public grossSales: number = 4984987.19487;
  public percentage: number = 0.4856;

  public onFocusOut(event: FocusEvent, type: string) {
    if (event?.target instanceof HTMLInputElement) {
      if (+event.target.value === 0) {
        if (type === 'net') this.netSales = 2567789.5567;
        if (type === 'gross') this.grossSales = 4984987.19487;
      }
    }
  }
}
