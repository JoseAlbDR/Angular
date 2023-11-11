import { Component } from '@angular/core';
import { NumericEvent } from './components/numeric-pipes/interfaces/numeric-event.type';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
})
export class NumbersPageComponent {
  public isCollapsed: boolean = true;

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
  }
}
