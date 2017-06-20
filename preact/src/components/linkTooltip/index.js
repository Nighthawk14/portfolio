import { h, Component } from 'preact';
import './linkTooltip.scss';

export default class LinkTooltip extends Component {
  constructor() {
    super();
    this.state = {
      isTooltipVisible: false
    }
  }

  render() {
    return (
      <div class={`nav-link ${this.props.title}`}>
        <a href="#" class="link" title={this.props.title} onMouseEnter={this.displayTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}/>
        {this.state.isTooltipVisible &&
        <div class="tooltip fade in right" role="tooltip">
          <div class="tooltip-arrow" />
          <div class="tooltip-inner">{this.props.title}</div>
        </div>
        }
      </div>
    );
  }

  displayTooltip() {
    this.setState({isTooltipVisible: true});
  }

  hideTooltip() {
    this.setState({isTooltipVisible: false});
  }
}
