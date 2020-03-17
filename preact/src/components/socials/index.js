import { h, Component } from 'preact';
import './socials.scss';

export default class Socials extends Component {
  render() {
    return (
      <div class="socials">
        <a href="https://github.com/Nighthawk14" class="nav-link github" rel="noopener" target="_blank" title="github" />
        <a href="http://fr.linkedin.com/pub/antoine-savignac/3b/884/613/" rel="noopener" class="nav-link linkedin" title="linkedin" target="_blank" />
        <a href="https://drive.google.com/file/d/0ByTZqMiGXKIAaFBOLVJRdG5GdTg/view?usp=sharing" rel="noopener" class="nav-link cv" title="cv" target="_blank" />
      </div>
    );
  }
}
