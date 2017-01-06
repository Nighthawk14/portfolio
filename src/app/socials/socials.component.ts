import {Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styles: [require('./socials.component.scss')]
})
export class SocialsComponent implements OnInit {
  root: any;
  socials: any;
  @Input('mobile') mobile: Boolean = false;

  constructor(elementRef: ElementRef) {
    this.root = elementRef.nativeElement;
  }

  private getTopPosition() {
    return jQuery(window).height()/2 - this.socials.height()/2;
  }

  ngOnInit() {
    this.socials = jQuery(this.root).find('.socials');
    jQuery(window).resize(() => {
      if(!this.mobile) {
        this.socials.css('top', this.getTopPosition());
      }
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if(!this.mobile) {
        this.socials.css('top', this.getTopPosition());
      }
    }, 100);
  }

}
