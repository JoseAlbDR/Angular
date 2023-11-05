import { Component, Input } from '@angular/core';

@Component({
  selector: 'numbers-numeric-input',
  templateUrl: './numeric-input.component.html',
  styles: [],
})
export class NumericInputComponent {
  @Input()
  public title: string = '';
}
