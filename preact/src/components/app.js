import { h, Component } from 'preact';
import Projects from './projects/';
import Technos from './technos/';
import Nav from './nav';
import Line from './line';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Line/>
        <Nav/>
        <Projects />
        <Technos />
      </div>
    );
  }
}
