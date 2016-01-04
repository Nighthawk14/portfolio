import {Component, ElementRef} from 'angular2/core';
import * as $ from 'jquery';
import 'jquery.scrollTo';

@Component({
  selector: '[nav]',
  template: require('./nav.html'),
  styles: [require('../../styles/nav/_nav.scss')]
})
export class Nav {

  elementRef: ElementRef;
  root: any;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
  moveTo(tag) {
    let {elem, offset} = this.getOffset(tag);
    $(document).scrollTo(elem, {offset:offset, duration:800, onAfter: () => {
       history.pushState({}, '', elem);
    }});
  }

  ngOnInit() {
    this.root = $(this.elementRef.nativeElement);
  }

  ngAfterViewInit() {
    let nav = this.root.find('nav');
    setTimeout(() => {
      nav.css('top', ($(window).height()/2) - (nav.height() / 2));
    }, 100);


    //nav.find('.nav-link').tooltip();
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
// scope.$parent.$parent.$watch('lang', function(){
//   setTranslation();
// });
// $(element).find('.nav-link').tooltip();
