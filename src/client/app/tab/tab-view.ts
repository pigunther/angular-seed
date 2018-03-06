import {
  AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList,
  ViewEncapsulation
} from '@angular/core';
import {MyTabPanel} from "./tab-panel";
import {TabIndexEvent, TabEvent} from "../interfaces/interfaces"


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-tab-view',
  templateUrl: 'tab-view.html',
  styleUrls: [ 'tab-view.css']
})
export class MyTabView implements AfterContentInit{

  tabs: MyTabPanel[];


  @ContentChildren(MyTabPanel) tabPanels: QueryList<MyTabPanel>; //todo read about QueryList
  //todo зачем подписывать на change у queryList

  @Output() onChange = new EventEmitter<TabIndexEvent>();
  @Output() onClose  = new EventEmitter<TabIndexEvent>();

  ngAfterContentInit() {
    this.tabs = this.tabPanels.toArray();
    let index = this.tabs.findIndex(function(el) {
      return el.selected;
    });
    for (let tab of this.tabs) {
      tab.selected = false;
    }
    index = (index === -1)? 0 : index;
    this.tabs[index].selected=true;
  }
  //todo read about event
  onTabClick(event: TabEvent) {
    console.log(event);
    let tab = event.tab;
    let index = this.tabs.findIndex(function(el) {
      return el == tab;
    });
    let selectedIndex  = this.tabs.findIndex(function(el) {
      return el.selected;
    });
    this.tabs[index].selected = true;
    this.tabs[selectedIndex].selected = false;

    this.onChange.emit({startEvent: event.startEvent, index: index});
  }

  onTabClose(event: TabEvent) {
    let tab = event.tab;
    let index = this.tabs.findIndex(function(el) {
      return el == tab;
    });
    let flag = tab.selected;
    this.tabs[index].closed = true;
    this.tabs[index].selected = false;

    if (flag) {
      let tab = this.tabs.find(function(el) {
        return !el.closed;
      });
      tab.selected = true;
    }
    this.onClose.emit({startEvent: event.startEvent, index: index});
  }

}


