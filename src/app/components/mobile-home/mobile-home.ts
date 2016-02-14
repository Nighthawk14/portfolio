import {Component} from 'angular2/core';
import {Socials} from '../socials/socials';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'mobile-home',
  template: require('./mobile-home.html'),
  directives: [Socials],
  styles: [require('../../styles/mobile-home/_mobile-home.scss')]
})
export class MobileHome {
  constructor(translate: TranslateService) {
    translate.use('en');
  }
}
