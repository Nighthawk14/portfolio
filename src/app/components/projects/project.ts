import {Component, View, Input, Injectable, ViewEncapsulation} from 'angular2/core';
import {MultiLangPipe} from '../../commons/multiLang/multiLangPipe';

class MultiLangCopy {
  fr: string;
  en: string;
}

class Url {
  copy: MultiLangCopy;
  url: string;
}

@Injectable()
@Component({
  selector: 'project-description',
  providers: [MultiLangPipe],
  pipes: [MultiLangPipe],
  template: `<p [innerHtml]="descriptionHTML"></p>`,
  styles: [ require('../../styles/projects/_description.scss')],
  encapsulation: ViewEncapsulation.None
})
class ProjectDescription {
  @Input('description') description;
  descriptionHTML: string = "";
  multiLangPipe: MultiLangPipe;
   
  constructor(multiLangPipe: MultiLangPipe) {
    this.multiLangPipe = multiLangPipe;
  }
  ngOnInit() {
    this.descriptionHTML = this.multiLangPipe.transform(this.description, null);
  }
}

@Component({
  selector: 'project',
  pipes: [MultiLangPipe],
  directives: [ProjectDescription],
  template: require('./project.html'),
  inputs: ['project'],
  styles: [ require('../../styles/projects/_project.scss')],
  encapsulation: ViewEncapsulation.None
})
export class Project {
  description: MultiLangCopy;
  image: string;
  title: MultiLangCopy;
  urls: Array<Url>;
  inverted?: Boolean;
}