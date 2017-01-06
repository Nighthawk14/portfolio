import {Component, OnInit, ElementRef} from '@angular/core';
import {TranslateService} from "ng2-translate";
import 'bootstrap-sass';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [require('./nav.component.scss')]
})
export class NavComponent implements OnInit {

  elementRef: ElementRef;
  translate: TranslateService;
  nav: any;
  root: any;
  constructor(elementRef: ElementRef, translate: TranslateService) {
    this.elementRef = elementRef;
    this.translate = translate;
    this.listenLangForTooltip();
  }

  private listenLangForTooltip() {
    this.translate.onLangChange.subscribe((params: {lang: string, translations: any}) => {
      this.nav.find('.nav-link').each((index, value) => {
        jQuery(value).attr('data-original-title', params.translations[jQuery(value).attr('data-key')]);
      });
    });
  }

  moveTo(event, tag) {
    event.preventDefault();
    let {elem, offset} = this.getOffset(tag);
    jQuery(document).scrollTo(elem, {offset:offset, duration:800, onAfter: () => {
      history.pushState({}, '', elem);
    }});
  }

  private getTopPosition() {
    return jQuery(window).height()/2 - this.nav.height()/2;
  }

  ngOnInit() {
    this.root = jQuery(this.elementRef.nativeElement);
    this.nav = this.root.find('nav');
    jQuery(window).resize(() => {
      this.nav.css('top', this.getTopPosition());
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.nav.css('top', this.getTopPosition());
    }, 100);

    this.nav.find('.nav-link').tooltip();
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
        offset = -30;
        break;

      default:
        elem = '#home';
        offset = 0;
        break;
    }

    return {elem, offset};
  }

}
