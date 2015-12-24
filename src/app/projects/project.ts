import {Component} from 'angular2/core';
import {MultiLangPipe} from '../commons/multiLang/multiLangPipe';

class MultiLangCopy {
  fr: string;
  en: string;
}

class Url {
  copy: MultiLangCopy;
  url: string;
}

@Component({
  selector: 'project',
  pipes: [MultiLangPipe],
  template: require('./project.html'),
  inputs: ['project'],
})
export class Project {
  description: MultiLangCopy;
  image: string;
  title: MultiLangCopy;
  urls: Array<Url>;
  inverted?: Boolean;
}