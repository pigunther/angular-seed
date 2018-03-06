import {Component, Input, ViewEncapsulation} from '@angular/core';


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-tab-panel',
  templateUrl: 'tab-panel.html',
  styleUrls: ['tab-view.css']
})
export class MyTabPanel {

  @Input() header: string;

  @Input() selected: boolean;
  @Input() disabled: boolean;
  @Input() closable: boolean;

  closed: boolean;
}
