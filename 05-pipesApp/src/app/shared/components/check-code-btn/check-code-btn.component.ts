import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-check-code-btn',
  templateUrl: './check-code-btn.component.html',
  styles: [],
})
export class CheckCodeBtnComponent {
  @Input()
  public url: string = '';

  redirect() {
    window.open(this.url, '_blank');
  }
}
