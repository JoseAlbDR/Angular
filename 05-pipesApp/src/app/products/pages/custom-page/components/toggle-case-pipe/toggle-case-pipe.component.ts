import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-toggle-case-pipe',
  templateUrl: './toggle-case-pipe.component.html',
  styles: [],
})
export class ToggleCasePipeComponent {
  @Input()
  public isCollapsed: boolean = true;
}
