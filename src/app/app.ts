import {Injectable, Component, ViewEncapsulation} from 'angular2/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {Projects} from './components/projects/projects.ts';
import {Line} from './components/line/line';
import {Technos} from './components/technos/technos';
import {Nav} from './components/nav/nav';

@Injectable()
@Component({
  selector: 'app',
  template: require('./app.html'),
  directives: [Projects, Technos, Nav, Line],
  styles: [require('./styles/app/_app.scss')],
  encapsulation: ViewEncapsulation.None
})
export class App {
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
