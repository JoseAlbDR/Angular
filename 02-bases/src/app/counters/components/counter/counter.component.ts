import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  public counter: number = 10;
  public value: number = 1;

  increaseCounter(): void {
    this.counter += this.value;
  }

  decreaseCounter(): void {
    this.counter -= this.value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

  setValue(value: number): void {
    console.log(value);
    this.value = value;
  }
}
