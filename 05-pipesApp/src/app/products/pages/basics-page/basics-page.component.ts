import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public isCollapsed: boolean = true;

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
  }
}
