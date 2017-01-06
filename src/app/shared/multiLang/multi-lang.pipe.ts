import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Pipe({
  name: 'multiLang'
})
export class MultiLangPipe implements PipeTransform {
  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  transform(value: any, args?: any): any {
    return value[this.translate.currentLang];
  }
}