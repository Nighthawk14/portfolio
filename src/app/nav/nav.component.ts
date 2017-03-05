import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(public translate: TranslateService) {
    this.translate = translate;
  }

  moveTo(event, tag) {
    event.preventDefault();
    let {elem, offset} = this.getOffset(tag);
    jQuery(document).scrollTo(elem, {offset:offset, duration:800, onAfter: () => {
      history.pushState({}, '', elem);
    }});
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  isNavLangHidden(lang: string) {
    return this.translate.currentLang === lang;
  }

  private getOffset(tag) {
    let elem;
    let offset;
    switch(tag)
    {
      case 'techs':
        elem = '#technos';
        offset = 0;
        break;

      case 'projects':
        elem = '#timeline';
        offset = -20;
        break;

      default:
        elem = '#home';
        offset = 0;
        break;
    }

    return {elem, offset};
  }

}
