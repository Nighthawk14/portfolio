import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MultiLangPipe} from "../../shared/multiLang/multi-lang.pipe";

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  providers: [MultiLangPipe],
  styleUrls: ['./project-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDescriptionComponent implements OnInit {
  @Input('description') description;
  descriptionHTML: string = "";

  constructor(private multiLangPipe: MultiLangPipe, private translate: TranslateService) {}

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
