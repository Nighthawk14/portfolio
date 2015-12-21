import {Component, Injectable} from 'angular2/core';
var technosData = require('./technos.json');
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'techno',
  pipes: [TranslatePipe],
  template: require('./techno.html')
})
class Techno {
  title: string;
  description: string;
  tags: Array<string>;
  CSSClass: string;
  private base = 6;
  private index = 0;
  private row = 0;

  private getOffset() {
    return -27 * this.row;
  }
}

@Component({
  selector: 'techno-mobile',
  template: require('./techno-mobile.html')
})

@Component({
  selector: 'technos',
  template: require('./technos.html'),
  directives: [Techno]
})
@Injectable()
export class Technos {
  technos = [];
  ngOnInit() {
    technosData.forEach(techno => {
      this.technos.push(new Techno(techno));
    })
  }
}