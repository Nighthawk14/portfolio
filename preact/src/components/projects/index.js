import { h, Component } from 'preact';
import projectsData from './projects.yml';
import './projects.scss';
import Project from './project/';

export default class Projects extends Component {
  render() {
    const projects = projectsData.map((project, index) => {
      const inverted = (index % 2 === 1 && index) ? 'timeline-inverted' : '';
      return (
        <li className={inverted}><Project project={project} /></li>
      );
    });

    return (
      <div id="projects" className="timelineContainer">
        <div className="container">
          <div className="page-header text-center">
            <h1 id="timeline">Projects</h1>
          </div>
          <ul className="timeline">
            {projects}
            <li className="clearfix"/>
          </ul>
        </div>
      </div>
    );
  }
}
