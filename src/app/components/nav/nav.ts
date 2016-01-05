import {Component, ElementRef} from 'angular2/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import * as $ from 'jquery';
import 'jquery.scrollto';
import {Socials} from '../socials/socials';

@Component({
  selector: '[nav]',
  template: require('./nav.html'),
  directives: [Socials],
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
  }

  moveTo(event, tag) {
    event.preventDefault();
    let {elem, offset} = this.getOffset(tag);
    $(document).scrollTo(elem, {offset:offset, duration:800, onAfter: () => {
       history.pushState({}, '', elem);
    }});
  }

  ngOnInit() {
    this.root = $(this.elementRef.nativeElement);
    this.nav = this.root.find('nav');
    $(window).resize(() => {
      this.nav.css('top',$(window).height()/2 - this.nav.height()/2);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.nav.css('top', ($(window).height()/2) - (this.nav.height() / 2));
    }, 100);

    //nav.find('.nav-link').tooltip();
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

// var setTranslation = function(){
//   $(element).find('.nav-link').each(function(k,value){
//     var key = $(value).attr('data-key');
//     $translate(key).then(function (translation) {
//       $(value).attr({
//         'data-original-title':translation,
//         'title':translation
//       });
//     });
//   });
// };
// $(element).find('.nav-link').tooltip();
