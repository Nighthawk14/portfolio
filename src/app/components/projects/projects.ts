import {Injectable, Component} from 'angular2/core';
import {Project} from './project';
// import {TranslatePipe} from 'ng2-translate/ng2-translate';
// var projectsData = require('./projectsData.ts');
import {ProjectData} from './projectsData';

@Component({
  selector: 'projects',
//   pipes: [TranslatePipe],
  template: require('./projects.html'),
  directives: [Project],
  providers: [ProjectData],
  styles: [ require('../../styles/projects/_projects.scss')]
})
@Injectable()
export class Projects {
  projects: Array<Project> = [];
  addProject(project) {
    this.projects.push(project);
  }
  constructor(projectsData: ProjectData) {
    let projects = projectsData.getData();
    projects.map((project, index) => {
      project.inverted = (index % 2 === 1 && index) ? true : false;
    })
    this.projects = projects;
  }
}