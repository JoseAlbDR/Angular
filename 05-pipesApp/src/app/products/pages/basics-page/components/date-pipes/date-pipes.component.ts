import { Component, Input } from '@angular/core';

@Component({
  selector: 'basics-date-pipes',
  templateUrl: './date-pipes.component.html',
  styles: [],
})
export class DatePipesComponent {
  @Input()
  public isCollapsed: boolean = true;

  @Input()
  public title: string = '';

  @Input()
  public result: string = '';

  public date: Date = new Date();
}
