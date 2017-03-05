import { Component } from '@angular/core';
import { TechnoComponent } from './techno/techno.component';
import { TechnoPosition } from "./techno/techno-position";
const technosData = require('json-loader!yaml-loader!./technos.yml');

@Component({
  selector: 'app-technos',
  template: require('./technos.component.html'),
  styles: [require('./technos.component.scss')],
  viewProviders: [TechnoPosition],
})
export class TechnosComponent{
  technos: Array<TechnoComponent> = [];
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
      techno.disabled = (commonTags.length <= 0);
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
