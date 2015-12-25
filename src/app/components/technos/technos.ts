import {Component, Injectable, Input} from 'angular2/core';
var technosData = require('./technos.json');
// import {TranslatePipe} from 'ng2-translate/ng2-translate';

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
  
  @Input('index') private index: number;
  @Input('last') private last: Boolean;
  private base: number = 6;
  private row: number = 0;

  ngOnInit() {
    if((this.index % this.base) === 0 && this.index !== 0) {
      this.base = (this.base === 6) ? 5 : 6;
      //$(iElm).before('<div class="clear"></div>');
      this.row++;
    }
    let _class = (this.base === 6) ? 'even' : 'odd';
//   $(iElm).addClass(_class);

    if(this.index >= 6){
      //$(iElm).css('top', this.getOffset());
    }

//     if(this.last){
//       var $w = $('#technos').find('.wrapper');
//       $w.height($w.height()+(getOffset()));
//       $('#technos').height(($(iElm).offset().top+$(iElm).height())-($('#technos').offset().top));
//     }
  }

  private getOffset() {
    return -27 * this.row;
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