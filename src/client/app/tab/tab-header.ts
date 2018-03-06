import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MyTabPanel} from "./tab-panel";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-tab-header',
  templateUrl: 'tab-header.html',
  styleUrls: ['tab-view.css']
})
export class MyTabHeader {

  @Input() tabs: MyTabPanel[];

  @Output() onTabClick = new EventEmitter<any>();
  @Output() onTabClose = new EventEmitter<any>();

  closeClick: boolean = false;

  tabClick(event:any, tab: any) {
    // console.log('tabClick');
    // console.log(event);
    if (!this.closeClick) {
      if (!tab.selected) this.onTabClick.emit({startEvent: event, tab: tab});
    } else {

      if (!tab.disabled) this.onTabClose.emit({startEvent: event, tab: tab});
      this.closeClick = false;
    }
  }

  tabClose() {
    this.closeClick = true;
    //if (!tab.disabled) this.onTabClose.emit({startEvent: event, tab: tab});
  }
}
