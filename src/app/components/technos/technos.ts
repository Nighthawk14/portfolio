import {Component, Injectable, Input, ElementRef, Host} from 'angular2/core';
var technosData = require('./technos.json');
import * as $ from 'jquery';
// import {TranslatePipe} from 'ng2-translate/ng2-translate';

class TechnoPosition {
  private row: number = 0;
  private base:number = 6;
  private loopIndex: number = -1;

  getBase(index) {
    let addClear = false;
    this.loopIndex++;
    if(this.loopIndex === this.base) {
      this.base = (this.base === 6) ? 5 : 6;
      addClear = true;
      this.row++;
      this.loopIndex = 0;
    }

    return {
      base:this.base,
      row: this.row,
      addClear: addClear
    };
  }
}

@Injectable()
@Component({
  selector: 'techno',
//   pipes: [TranslatePipe],
  template: require('./techno.html'),
  inputs: ['techno'],
  styles: [require('../../styles/technos/_techno.scss')]
})
class Techno {
  title: String;
  description: String;
  tags: Array<String>;
  CSSClass: String;
  disabled?: Boolean = false;
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
    console.log('index', this.index);
    console.log('base', base);
    console.log('row', row);
    console.log('addClear', addClear);
    if(addClear) {
      this.root.before('<div class="clear"></div>');
    }
    let _class = (base === 6) ? 'even' : 'odd';
    this.root.addClass(_class);

    if(row > 0){
      this.root.css('top', this.getOffset(row));
    }

    if(this.last){
      var $w = $('#technos').find('.wrapper');
      $w.height($w.height()+(this.getOffset(row)));
    }
  }

  private getOffset(row: number) {
    return -27 * row;
  }
}

// @Component({
//   selector: 'techno-mobile',
//   template: require('./techno-mobile.html')
// })

@Component({
  selector: 'technos',
  template: require('./technos.html'),
  directives: [Techno],
  viewProviders: [TechnoPosition],
  styles: [require('../../styles/technos/_technos.scss')]
})
export class Technos {
  technos: Array<Techno> = [];
  filter: string;

  constructor() {
    technosData.forEach(techno => {
      this.technos.push(techno);
    });
  }

  techFilter(event, filter) {
    if(!this.isSameFilter(filter)) {
      this.filter = filter;
      let tags = this.getTagsFromFilter(filter);
      this.setTechnosState(tags);
    }
  }

  private setTechnosState(tags: Set<String>) {
    this.technos.map(techno => {
        let commonTags = [...techno.tags].filter(x => tags.has(x));
        let disabled = (commonTags.length > 0) ? false : true;
        techno.disabled = disabled;
      });
  }

  private getTagsFromFilter(filter) {
    let tags = [];
    switch(filter){
        case 'js':
          tags = ['js'];
        break;
        case 'dev':
          tags = ['dev'];
        break;
        case 'data':
          tags = ['data'];
        break;
        case 'inte':
          tags = ['inte','mobile'];
        break;
      }
    return new Set(tags);
  }
  private isSameFilter(filter) {
    let isSameFilter = this.filter === filter;
    if(isSameFilter) {
      this.technos.map(techno => {
        techno.disabled = false;
      });
      this.filter = null;
    }
    return isSameFilter;
  }
}
