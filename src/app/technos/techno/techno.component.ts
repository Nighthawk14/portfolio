import {Component, OnInit, ElementRef, Input, Host} from '@angular/core';
import { TechnoPosition } from './techno-position';

@Component({
    selector: 'app-techno',
    template: require('./techno.component.html'),
    inputs: ['techno'],
    styles: [require('./techno.component.scss')]
})
export class TechnoComponent implements OnInit{
    title: String;
    description: String;
    tags: Array<String>;
    CSSClass: String;
    disabled: Boolean = false;
    technoPosition: TechnoPosition;
    elementRef: ElementRef;
    root: any;

    @Input('index') private index: number;
    @Input('last') private last: Boolean;

    constructor(@Host() technoPosition: TechnoPosition, elementRef: ElementRef) {
        this.technoPosition = technoPosition;
        this.elementRef = elementRef;
    }

    ngOnInit() {
        this.root = $(this.elementRef.nativeElement);
        let {base, row, addClear} = this.technoPosition.getBase(this.index);
        if(addClear) {
            this.root.before('<div class="clear"></div>');
        }
        let _class = (base === 6) ? 'even' : 'odd';
        this.root.addClass(_class);

        if(row > 0){
            this.root.css('top', this.getOffset(row));
        }

        if(this.last){
            var $w = jQuery('#technos').find('.wrapper');
            $w.height($w.height()+(this.getOffset(row)));
        }
    }

    private getOffset(row: number) {
        return -27 * row;
    }
}