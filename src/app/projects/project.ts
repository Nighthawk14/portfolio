import {Injectable} from 'angular2/core';

class MultiLangCopy {
  fr: string;
  en: string;
}

@Injectable()
class Url {
  copy: MultiLangCopy;
  url: string;
}

@Injectable()
export class Project {
  description: MultiLangCopy;
  image: string;
  title: MultiLangCopy;
  url: Url;
}