import {Component, OnInit, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui/ui/effect';
import 'jquery.scrollto';

export class LineDrawing {
  angle: number;

  triggerAnimation() {
    $('#mask').animate(
        {
          left: $(window).width()*3,
          top: -$(window).height()*3+100
        },
        {
          duration: 3000,
          specialEasing: {
            left: 'easeInOutCubic',
            top: 'easeInOutCubic'
          },
          complete: () => {
            $('#mask').css('display', 'none');
          }
        }
    );
  }

  calculateDiagonale() {
    let scrW = $(window).width();
    let scrH = $(window).height();
    this.angle = (Math.atan(scrH / scrW)) * (180/Math.PI);
    let lineElement = $('#line,#mask');
    let length = Math.sqrt(( scrW * scrW) + (scrH * scrH ))+10;
    lineElement.css('left', ( -1 ) * ((length - scrW) / 2) );
    lineElement.css('width', length);
    lineElement.css('top', (scrH / 2));
    this.setAngle(lineElement);
    $('#mask').css('top',(scrH / 2)-2000);
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
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  constructor(public elementRef: ElementRef, public line: LineDrawing) {}

  ngAfterContentInit() {
    this.line.calculateDiagonale();
    this.line.triggerAnimation();
  }

  ngOnInit() {
    $(this.elementRef.nativeElement).css({
      height:$(window).height()
    });
    $(window).bind('resize', () => {
      this.line.calculateDiagonale();
    });
  }

  moveToProjects() {
    $(document).scrollTo('#timeline', {offset:-20, duration:800});
  }

}
