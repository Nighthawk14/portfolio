import {Component, Input, ViewEncapsulation} from '@angular/core';

class MultiLangCopy {
  fr: string;
  en: string;
}

class Url {
  copy: MultiLangCopy;
  url: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [require('./project.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent {
  @Input('project') project;
  description: MultiLangCopy;
  image: string;
  title: MultiLangCopy;
  urls: Array<Url>;
  inverted: Boolean;
}
