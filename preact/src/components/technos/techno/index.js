import { h, Component } from 'preact';
import './techno.scss';

export default class Techno extends Component {
  render() {
    const { techno } = this.props;
    return (
      <div className="techno_desktop">
        <div className={`flip-container ${this.state.onTouch ? 'hover' : ''}`} onTouchStart={this.handleOnTouchStart}>
          <div className="flipper">
            <div className="front">
              <div className={`imgTech ${techno.CSSClass}`} />
            </div>
            <div className="back">
              <div className="title">{techno.title}</div>
              <div className="desc">{techno.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleOnTouchStart() {
    this.setState({onTouch: !this.state.onTouch})
  }
}
