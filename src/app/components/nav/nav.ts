import {Component, ElementRef} from 'angular2/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import * as $ from 'jquery';
//TODO: find another way to do that
//TODO: issue is in bootstrap "jQuery is not defined"
window['jQuery'] = $;
import 'bootstrap';
import 'jquery.scrollTo';
import {Socials} from '../socials/socials';

@Component({
  selector: '[nav]',
  template: require('./nav.html'),
  directives: [Socials],
  pipes: [TranslatePipe],
  styles: [require('../../styles/nav/_nav.scss')]
})
export class Nav {

  elementRef: ElementRef;
  translate: TranslateService;
  root: any;
  nav: any;
  constructor(elementRef: ElementRef, translate: TranslateService) {
    this.elementRef = elementRef;
    this.translate = translate;
    this.listenLangForTooltip();
  }

  private listenLangForTooltip() {
    this.translate.onLangChange.subscribe((params: {lang: string, translations: any}) => {
      this.nav.find('.nav-link').each((index, value) => {
        $(value).attr('data-original-title', params.translations[$(value).attr('data-key')]);
      });
    });
  }

  moveTo(event, tag) {
    event.preventDefault();
    let {elem, offset} = this.getOffset(tag);
    $(document).scrollTo(elem, {offset:offset, duration:800, onAfter: () => {
       history.pushState({}, '', elem);
    }});
  }

  private getTopPosition() {
    return $(window).height()/2 - this.nav.height()/2;
  }

  ngOnInit() {
    this.root = $(this.elementRef.nativeElement);
    this.nav = this.root.find('nav');
    $(window).resize(() => {
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
