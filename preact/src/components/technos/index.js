import { h, Component } from 'preact';
import technos from './technos.yml';
import Techno from './techno';
import './technos.scss';
import $ from 'jquery';

const filterData = [
  { value: 'js', label: 'Javascript', tags: new Set(['js']) },
  { value: 'dev', label: 'Development', tags: new Set(['dev']) },
  { value: 'data', label: 'Data', tags: new Set(['data']) },
  { value: 'inte', label: 'Integration', tags: new Set(['inte', 'mobile']) },
];

class TechnoPosition {
  constructor() {
    this.row = 0;
    this.base = 6;
    this.loopIndex = -1;
  }

  getBase() {
    let addClear = false;
    this.loopIndex++;
    if(this.loopIndex === this.base) {
      this.base = (this.base === 6) ? 5 : 6;
      addClear = true;
      this.row++;
      this.loopIndex = 0;
    }

    return {
      base:this.base,
      row: this.row,
      addClear: addClear
    };
  }
}

export default class Technos extends Component {
  constructor() {
    super();
    this.state = {
      technos
    };
    this.resetTechnoPosition();
  }
  render() {
    const filters = filterData.map((filter, index) => {
      return (
        <span>
          <span onClick={() => this.techFilter(filter)} className={`filter ${this.state.activeFilter === filter.value ? 'active' : ''}`}>{filter.label}</span>
          { index !== filterData.length -1 && ' / '}
        </span>
      );
    });
    return (
      <div id="technos">
        <div className="wrapper">
          <div className="filters">
            <i className="glyphicon glyphicon-th-list" />
            {filters}
          </div>
          <div className="techs">
            {this.getTechnos()}
          </div>
        </div>
      </div>
    );
  }

  //TODO: that could be done once in the constructor instead of at every render
  getTechnos() {
    const technos = [];
    this.state.technos.map((techno, index) => {
      let {base, row, addClear} = this.technoPosition.getBase();

      if (addClear) {
        technos.push(<div className="clear" />);
      }
      technos.push(
        <div id={`techno-${index}`}
          style={(row > 0) ? `top: ${this.getOffset(row)}px` : ''}
          className={`tech ${techno.disabled ? 'disabled' : ''} ${(base === 6) ? 'even' : 'odd'}`}>
          <Techno techno={techno}/>
        </div>
      );
    });
    return technos;
  }

  componentDidMount() {
    const $w = $('#technos').find('.wrapper');
    $w.height($w.height()+(this.getOffset(this.technoPosition.row)));
    this.resetTechnoPosition();
  }

  componentDidUpdate() {
    this.resetTechnoPosition();
  }

  resetTechnoPosition() {
    this.technoPosition = new TechnoPosition();
  }

  techFilter(filter) {
    if(!this.isSameFilter(filter.value)) {
      this.setState({activeFilter: filter.value});
      this.setTechnosState(filter.tags);
    }
  }

  isSameFilter(filter) {
    const isSameFilter = this.state.activeFilter === filter;
    if (isSameFilter) {
      this.state.technos.map(techno => {
        techno.disabled = false;
      });
      this.setState({activeFilter: null});
    }
    return isSameFilter;
  }

  setTechnosState(tags) {
    this.state.technos.map(techno => {
      const commonTags = [...techno.tags].filter(x => tags.has(x));
      techno.disabled = !commonTags.length;
    });
  }

  getOffset(row) {
    return -27 * row;
  }
}
