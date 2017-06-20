import { h, Component } from 'preact';
import './nav.scss';
import $ from 'jquery';
import 'jquery.scrollto';
import LinkTooltip from '../linkTooltip';
import Socials from '../socials';

export default class Nav extends Component {
  render() {
    const links = ['home', 'projects', 'technos'].map((link) =>
      <li onClick={(e) => this.moveTo(e, link)}><LinkTooltip title={link}/></li>
    );
    return (
      <div>
        <nav>
          <ul>
            {links}
          </ul>
        </nav>
        <div id="nav-logo">
          <object data="/assets/images/logo-mobile.svg" aria-label="logo-mobile" type="image/svg+xml" />
        </div>
        <Socials/>
      </div>
    );
  }

  moveTo(event, tag) {
    event.preventDefault();
    const elem = `#${tag}`;
    $(document).scrollTo(elem, {offset: 0, duration:800, onAfter: () => {
      history.pushState({}, '', elem);
    }});
  }
}
