import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-toggle-collapsed',
  templateUrl: './toggle-collapsed.component.html',
  styles: [],
})
export class ToggleCollapsedComponent {
  public isCollapsed: boolean = true;

  @Output()
  public togglePanel: EventEmitter<boolean> = new EventEmitter();

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
    this.togglePanel.emit(value);
  }
}
