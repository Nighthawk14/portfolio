import {Component, OnInit, ElementRef, Input, Host} from '@angular/core';
import { TechnoPosition } from './techno-position';
import * as $ from 'jquery';

@Component({
    selector: 'app-techno',
    templateUrl: './techno.component.html',
    inputs: ['techno'],
    styleUrls: ['./techno.component.scss']
})
export class TechnoComponent implements OnInit{
    title: String;
    description: String;
    tags: Array<String>;
    CSSClass: String;
    disabled: Boolean = false;
    root: any;
    onTouch: Boolean = false;

    @Input('index') private index: number;
    @Input('last') private last: Boolean;
    @Input('techno') techno: this;

    constructor(@Host() private technoPosition: TechnoPosition, private elementRef: ElementRef) {}

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
            const $w = $('#technos').find('.wrapper');
            $w.height($w.height()+(this.getOffset(row)));
        }
    }

    private getOffset(row: number) {
        return -27 * row;
    }
}
