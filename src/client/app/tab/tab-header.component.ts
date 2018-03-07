import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MyTabPanel} from "./tab-panel.component";
import {TabEvent} from "./tap-panel-events.model";

// todo write slider
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'my-tab-header',
  templateUrl: 'tab-header.component.html',
  styleUrls: ['tab-header.component.css']
})
export class MyTabHeader {

  @Input() tabs: MyTabPanel[];

  @Output() onTabClick = new EventEmitter<TabEvent>();
  @Output() onTabClose = new EventEmitter<TabEvent>();


  tabClick(tab: MyTabPanel) {
    console.log('click tab');
    if (!tab.selected && !tab.disabled) this.onTabClick.emit({startEvent: event, tab: tab});
    //todo event.stopPropagation() ?
  }

  tabClose(tab: MyTabPanel) {
    console.log('close tab');
    if (!tab.disabled) this.onTabClose.emit({startEvent: event, tab: tab});
  }
}
