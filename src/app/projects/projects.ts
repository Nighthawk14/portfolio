import {Injectable, Component} from 'angular2/core';
import {Project} from './project';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
var projectsData = require('./projectsData.ts');

@Component({
  selector: 'projects',
  pipes: [TranslatePipe],
  template: require('./projects.html')
})
@Injectable()
export class Projects {
  projects: Array<Project> = [];
  addProject(project) {
    this.projects.push(project);
  }
  ngOnInit() {
    projectsData.map(project => {
      this.addProject(project);
    });
  }
}