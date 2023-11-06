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

  public onValueChange(event: { type: string; value: number }) {
    if (event.type === 'net') {
      this.netSales = event.value;
    }
    if (event.type === 'gross') {
      this.grossSales = event.value;
    }
    if (event.type === 'percent') {
      this.percentage = event.value;
    }
  }
}
