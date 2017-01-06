import {Component, OnInit, ElementRef} from '@angular/core';

class LineDrawing {
  angle: number;

  triggerAnimation() {
    console.log(jQuery(window).width());
    console.log();
    jQuery('#mask').animate(
        {
          left: jQuery(window).width()*3,
          top: -jQuery(window).height()*3+100
        },
        {
          duration: 3000,
          specialEasing: {
            left: 'easeInOutCubic',
            top: 'easeInOutCubic'
          },
          complete: () => {
            console.log('finish');
            jQuery('#mask').css('display', 'none');
          }
        }
    );
  }

  calculateDiagonale() {
    let scrW = jQuery(window).width();
    let scrH = jQuery(window).height();
    this.angle = (Math.atan(scrH / scrW)) * (180/Math.PI);
    let lineElement = jQuery('#line,#mask');
    let length = Math.sqrt(( scrW * scrW) + (scrH * scrH ))+10;
    lineElement.css('left', ( -1 ) * ((length - scrW) / 2) );
    lineElement.css('width', length);
    lineElement.css('top', (scrH / 2));
    this.setAngle(lineElement);
    jQuery('#mask').css('top',(scrH / 2)-2000);
  }

  setAngle(element) {
    let cssProperties = 'scale(1) rotate(' + (-1) * this.angle + 'deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)';
    element.css('-webkit-transform', cssProperties);
    element.css('-moz-transform', cssProperties);
    element.css('-o-transform', cssProperties);
    element.css('-ms-transform', cssProperties);
    element.css('transform', cssProperties);
  }
}

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  providers: [LineDrawing],
  styles: [require('./line.component.scss')]
})
export class LineComponent implements OnInit {

  elementRef: ElementRef;
  line: LineDrawing;
  constructor(elementRef: ElementRef, line: LineDrawing) {
    this.elementRef = elementRef;
    this.line = line;
  }

  ngAfterContentInit() {
    this.line.calculateDiagonale();
    this.line.triggerAnimation();
  }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).css({
      height:jQuery(window).height()
    });
    jQuery(window).bind('resize', () => {
      this.line.calculateDiagonale();
    });
  }

  moveToProjects() {
    jQuery(document).scrollTo('#timeline', {offset:-30, duration:800});
  }

}
