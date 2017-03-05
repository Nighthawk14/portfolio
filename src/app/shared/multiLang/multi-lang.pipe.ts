import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  name: 'multiLang'
})
export class MultiLangPipe implements PipeTransform {
  constructor(private translate: TranslateService) {
    this.translate = translate;
  }

  transform(value: any, args?: any): any {
    return value[this.translate.currentLang];
  }
}
