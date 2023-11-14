import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/lang.service';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean): string {
    return canFly ? 'fly' : 'cantFly';
  }
}
