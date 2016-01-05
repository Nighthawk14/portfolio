import {Component, ElementRef} from 'angular2/core';

@Component({
  selector: 'socials',
  template: require('./socials.html'),
  styles: [require('../../styles/socials/_socials.scss')]
})
export class Socials {
  root: any;
  constructor(elementRef: ElementRef) {
    this.root = elementRef.nativeElement;
  }
  ngAfterViewInit() {
    let socials = $(this.root);
    setTimeout(() => {
      socials.css('top', ($(window).height()/2) - (socials.height() / 2));
    }, 100);
  }
}