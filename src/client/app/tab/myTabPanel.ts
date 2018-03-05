import {Component, Input} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-tabPanel',
  templateUrl: 'myTabPanel.html',
  styleUrls: ['myTabView.css']
})
export class MyTabPanel {

  @Input() header: string;

  @Input() selected: boolean;
  @Input() disabled: boolean;
  @Input() closable: boolean;

  closed: boolean;
}
