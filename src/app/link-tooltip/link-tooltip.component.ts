import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-link-tooltip',
  templateUrl: './link-tooltip.component.html',
  styleUrls: ['./link-tooltip.component.scss']
})
export class LinkTooltipComponent {

  isTooltipVisible: boolean = false;
  @Input('title') title: string;
  @Output() onClicked = new EventEmitter<void>();

  constructor() { }

  displayTooltip() {
    this.isTooltipVisible = true
  }

  hideTooltip() {
    this.isTooltipVisible = false
  }
}
