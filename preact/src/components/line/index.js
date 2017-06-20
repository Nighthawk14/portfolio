import { h, Component } from 'preact';
import $ from 'jquery';
import 'jquery.scrollto';
import LineDrawing from './lineDrawing';
import './line.scss';

export default class Line extends Component {
  constructor() {
    super();
    this.line = new LineDrawing();
  }
  render() {
    return (
      <div id="home">
        <div id="line">
          <object class="logo-object" data="/assets/images/logo.svg" aria-label="logo" id="logo" type="image/svg+xml"/>
        </div>
        <div id="mask"/>
        <div class="scroll cursor" onClick={this.moveToProjects.bind(this)}/>
      </div>
    );
  }

  componentDidMount() {
    $('#home').css({
      height:$(window).height()
    });
    $(window).bind('resize', () => {
      this.line.calculateDiagonale();
    });

    this.line.calculateDiagonale();
    this.line.triggerAnimation();
  }

  moveToProjects() {
    $(document).scrollTo('#projects', {offset:0, duration:800});
  }
}
