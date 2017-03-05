import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

import { AppComponent } from './app.component';
import { TechnosComponent } from './technos/technos.component';
import { TechnoComponent } from './technos/techno/techno.component';
import { MultiLangPipe } from './shared/multiLang/multi-lang.pipe';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDescriptionComponent } from './projects/project-description/project-description.component';
import { NavComponent } from './nav/nav.component';
import { SocialsComponent } from './socials/socials.component';
import { LineComponent } from './line/line.component';
import { LinkTooltipComponent } from './link-tooltip/link-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnosComponent,
    TechnoComponent,
    MultiLangPipe,
    ProjectsComponent,
    ProjectComponent,
    ProjectDescriptionComponent,
    NavComponent,
    SocialsComponent,
    LineComponent,
    LinkTooltipComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    let userLang = navigator.language.split('-')[0]; // use navigator lang if available
    translate.setDefaultLang('en');

    translate.setTranslation('fr', {
      JS: 'Javascript',
      DEV: 'Développement',
      DATA: 'Données',
      INTE: 'Integration',
      HOME:'Accueil',
      PROJECTS:'Projets',
      TECHS:'Technologies',
      TOOLS:'Outils'
    });
    translate.setTranslation('en', {
      JS: 'Javascript',
      DEV: 'Development',
      DATA: 'Data',
      INTE: 'Integration',
      HOME:'Home',
      PROJECTS:'Projects',
      TECHS:'Technologies',
      TOOLS:'Tools'
    });

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(userLang);
  }
}
