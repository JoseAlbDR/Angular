import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-check-code-btn',
  templateUrl: './check-code-btn.component.html',
  styles: [],
})
export class CheckCodeBtnComponent {
  @Input()
  public url: string = '';

  @Input()
  public content: string = 'Check Code';

  redirect() {
    window.open(this.url, '_blank');
  }
}
