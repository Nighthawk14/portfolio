import {Component, ElementRef} from 'angular2/core';
import * as $ from 'jquery';

@Component({
  selector: 'socials',
  template: require('./socials.html'),
  styles: [require('../../styles/socials/_socials.scss')]
})
export class Socials {
  root: any;
  socials: any;

  constructor(elementRef: ElementRef) {
    this.root = elementRef.nativeElement;
  }

  private getTopPosition() {
    return $(window).height()/2 - this.socials.height()/2;
  }

  ngOnInit() {
    this.socials = $(this.root).find('.socials');
    $(window).resize(() => {
      this.socials.css('top', this.getTopPosition());
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.socials.css('top', this.getTopPosition());
    }, 100);
  }
}
