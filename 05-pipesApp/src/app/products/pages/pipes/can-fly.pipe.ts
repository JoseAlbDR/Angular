import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/lang.service';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  // constructor(
  //   private tanslateService: TranslateService,
  //   private langService: LangService
  // ) {}

  // ngOnInit(): void {
  //   this.langService.languageChanged.subscribe((language: string) => {
  //     this.selectedLanguage = language;
  //     console.log(this.selectedLanguage);
  //   });
  // }

  // public selectedLanguage: string = this.langService.selectedLanguage;
  // public canFly: string = '';

  // translation(canFly: boolean) {
  //   console.log(this.selectedLanguage);
  //   this.canFly = canFly
  //     ? this.tanslateService.instant(
  //         this.langService.customPipesMap.customPipes.table.fly[
  //           this.selectedLanguage
  //         ]
  //       )
  //     : this.tanslateService.instant(
  //         this.langService.customPipesMap.customPipes.table.cantFly[
  //           this.selectedLanguage
  //         ]
  //       );
  // }

  transform(canFly: boolean): string {
    return canFly ? 'fly' : 'cantFly';
  }
}
