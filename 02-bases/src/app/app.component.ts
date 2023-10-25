import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'My First Angular APP';
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
}
