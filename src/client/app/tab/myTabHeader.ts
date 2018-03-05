import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MyTabPanel} from "./myTabPanel";


@Component({
  moduleId: module.id,
  selector: 'my-tabHeader',
  templateUrl: 'myTabHeader.html',
  styleUrls: ['myTabView.css']
})
export class MyTabHeader {

  @Input() tabs: MyTabPanel[];

  @Output() onTabClick = new EventEmitter<any>();
  @Output() onTabClose = new EventEmitter<any>();

  tabClick(tab: any) {
    if (!tab.selected) this.onTabClick.emit({startEvent: event, tab: tab});
  }

  tabClose(tab: any) {
    if (!tab.disabled) this.onTabClose.emit({startEvent: event, tab: tab});
  }
}
