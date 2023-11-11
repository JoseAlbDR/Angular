import { Component, Input } from '@angular/core';

@Component({
  selector: 'basics-date-pipes-locale',
  templateUrl: './date-pipes-locale.component.html',
  styles: [],
})
export class DatePipesLocaleComponent {
  @Input()
  public isCollapsed: boolean = true;

  public date: Date = new Date();
}
