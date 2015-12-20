import {Injectable, Component} from 'angular2/core';
import {Project} from './project';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'projects',
  pipes: [TranslatePipe],
  template: require('./projects.html')
})
@Injectable()
export class Projects {
  projects: Array<Project>;
  addProject(project: Project) {
    this.projects.push(project);
  }
}