import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MyTabPanel} from "./tab-panel";
import {TabEvent} from "../interfaces/interfaces"


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-tab-header',
  templateUrl: 'tab-header.html',
  styleUrls: ['tab-view.css']
})
export class MyTabHeader {

  @Input() tabs: MyTabPanel[];

  @Output() onTabClick = new EventEmitter<TabEvent>();
  @Output() onTabClose = new EventEmitter<TabEvent>();


  tabClick(event:any, tab: any) {
    if (!tab.selected && !tab.disabled) this.onTabClick.emit({startEvent: event, tab: tab});
  }

  tabClose(event:any, tab: any) {
    if (!tab.disabled) this.onTabClose.emit({startEvent: event, tab: tab});
  }
}
