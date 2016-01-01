import {Component, ElementRef} from 'angular2/core';
import * as $ from 'jquery';

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
//     $document.scrollTo(elem, offset,800).then(function(){
//     $location.hash(tag);
//   });
  }
  
  ngAfterViewInit() {
    this.root = $(this.elementRef.nativeElement);
    let nav = this.root.find('nav');
    console.log($(window).height()/2)
    console.log(nav.height());
    setTimeout(() => {
      console.log(nav.height());
    }, 2000);
    nav.css('top', ($(window).height()/2) - (nav.height() / 2));
    //this.renderer.setElementStyle(this.elementRef, 'top', '150px');
    //let nav = $(this.elementRef.nativeElement).find('nav');
    //nav.css('top', $(window).height()/2 - nav.height()/2);
  }
  
  private getOffset(tag) {
    let elem;
    let offset;
    switch(tag)
    {
      case 'techs':
        elem = '#technos';
        offset = -30;
      break;

      case 'projects':
        elem = '#timeline';
        offset = 30;
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
// $(element).css('top',$(window).height()/2 - $(element).height()/2);
// $('nav a').on('click', function(e){
//   e.preventDefault();
//   var offset,elem;
//   var tag = $(this).attr('data-element');
//   $document.scrollTo(elem, offset,800).then(function(){
//     $location.hash(tag);
//   });
// });