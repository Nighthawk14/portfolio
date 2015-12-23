import {Injectable} from 'angular2/core';

class MultiLangCopy {
  fr: string;
  en: string;
}

@Injectable()
class Url {
  copy: MultiLangCopy;
  url: string;

  constructor(url) {
    this.url = url.url;
    this.copy = {fr: url.fr, en: url.en};
  }
}

@Injectable()
export class Project {
  description: MultiLangCopy;
  image: string;
  title: MultiLangCopy;
  urls: Array<Url> = [];

  constructor(project) {
    this.description = project.description;
    this.title = project.title;
    this.image = project.image;
    project.url.map(url => {
      this.urls.push(url);
    });
  }
}