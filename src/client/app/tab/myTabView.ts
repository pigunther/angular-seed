import {AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList} from '@angular/core';
import {MyTabPanel} from "./myTabPanel";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyTabHeader} from "./myTabHeader";

@Component({
  moduleId: module.id,
  selector: 'my-tabView',
  templateUrl: 'myTabView.html',
  styleUrls: [ 'myTabView.css']
})
export class MyTabView implements AfterContentInit{

  tabs: MyTabPanel[];

  @ContentChildren(MyTabPanel) tabPanels: QueryList<MyTabPanel>; //todo read about QueryList

  @Output() onChange = new EventEmitter<any>();
  @Output() onClose  = new EventEmitter<any>();

  ngAfterContentInit() {
    this.tabs = this.tabPanels.toArray();
    let index = this.tabs.findIndex(function(el) {
      return el.selected;
    });
    for (let tab of this.tabs) {
      tab.selected = false;
    }
    index = (index === -1)? 0 : index;
    this.tabs[index || 0].selected=true;
  }
  //todo read about event
  onTabClick(event: Event, tab: MyTabPanel) {
    let index = this.tabs.findIndex(function(el) {
      return el == tab;
    });
    let selectedIndex  = this.tabs.findIndex(function(el) {
      return el.selected;
    });
    this.tabs[index].selected = true;
    this.tabs[selectedIndex].selected = false;

    this.onChange.emit({startEvent: event, index: index});
  }

  onTabClose(event: Event, tab: MyTabPanel) {
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
    this.onClose.emit({startEvent: event, index: index});
    //todo why pass only 1 argument
  }

}


@NgModule({
  imports: [CommonModule],
  declarations: [MyTabView, MyTabPanel, MyTabHeader],
  exports: [MyTabView, MyTabPanel, MyTabHeader]
})
export class MyTabViewModule {
}
