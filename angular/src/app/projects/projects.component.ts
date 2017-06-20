import {Component} from '@angular/core';
import {ProjectComponent} from "./project/project.component";
const projectsData = require('json-loader!yaml-loader!./projects.yml');

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Array<ProjectComponent> = [];

  constructor() {
    projectsData.map((project, index) => {
      project.inverted = !!(index % 2 === 1 && index);
      this.projects.push(project);
    });
  }
}
