import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "ng2-translate";
import {MultiLangPipe} from "../../shared/multiLang/multi-lang.pipe";

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  providers: [MultiLangPipe],
  styles: [require('./project-description.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDescriptionComponent implements OnInit {

  @Input('description') description;
  descriptionHTML: string = "";
  multiLangPipe: MultiLangPipe;
  translate: TranslateService;

  constructor(multiLangPipe: MultiLangPipe, translate: TranslateService) {
    this.multiLangPipe = multiLangPipe;
    this.translate = translate;
  }
  updateDescription() {
    this.descriptionHTML = this.multiLangPipe.transform(this.description, null);
  }
  ngOnInit() {
    this.updateDescription();
    this.translate.onLangChange.subscribe(() => {
      this.updateDescription();
    });
  }

}
