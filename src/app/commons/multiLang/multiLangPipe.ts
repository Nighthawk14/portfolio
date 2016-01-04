import {Pipe} from 'angular2/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Pipe({name: 'multiLang', pure: false})
export class MultiLangPipe {
  translate: TranslateService;
  constructor(translate: TranslateService) {
    this.translate = translate;
  }
  transform(v, args) {
    return v[this.translate.currentLang];
  }
}
