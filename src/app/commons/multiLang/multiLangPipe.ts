import {Pipe} from 'angular2/core';
// import {TranslateService} from 'ng2-translate/ng2-translate';

@Pipe({name: 'multiLang'})
export class MultiLangPipe {
  transform(v, args) { return v['fr']; }
}