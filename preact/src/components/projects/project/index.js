import { h, Component } from 'preact';
import './project.scss';

export default class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <div>
        <div className="timeline-badge primary"><ion-icon name="radio-button-on" className="orange"></ion-icon></div>
        <div className="timeline-panel">
          <div className="timeline-heading"><img src={`assets/images/projects/${project.image}`} alt={project.title.en} className="img-responsive"/></div>
          <div className="timeline-body">
            <h3>{project.title.en}</h3>
            <div className="description" dangerouslySetInnerHTML={{__html: project.description.en}} />
            {project.urls.length > 0 &&
              <div className="links" style>
                <hr/>
                {this.getLinks()}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }

  getLinks() {
    return this.props.project.urls.map((url) => {
      return (
        <a href={url.url} target="_blank" rel="noopener">
          {url.copy.en} &nbsp;
          <ion-icon name="log-out"></ion-icon>
          <div className="clear" />
        </a>
      )
    });
  }
}
