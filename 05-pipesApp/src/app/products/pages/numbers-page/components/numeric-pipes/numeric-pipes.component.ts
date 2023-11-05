import { Component } from '@angular/core';

@Component({
  selector: 'numbers-numeric-pipes',
  templateUrl: './numeric-pipes.component.html',
  styles: [],
})
export class NumericPipesComponent {
  public totalSells: number = 2567789.5567;
  public percentage: number = 0.4856;

  public input: number = this.totalSells;

  public onFocusOut(event: FocusEvent) {
    if (event?.target instanceof HTMLInputElement) {
      if (+event.target.value === 0) {
        this.totalSells = 2567789.5567;
      }
    }
  }
}
