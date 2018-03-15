import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {MyTabPanel} from "./tab-panel.component";
import {TabEvent, IndexEvent} from "./tap-panel-events.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-tab-view',
  templateUrl: 'tab-view.component.html',
  styleUrls: ['tab-view.component.css']
})
export class MyTabView implements AfterContentInit {

  tabs: MyTabPanel[];

  @ContentChildren(MyTabPanel) tabPanels: QueryList<MyTabPanel>;

  @Output() onChange = new EventEmitter<IndexEvent>();
  @Output() onClose = new EventEmitter<IndexEvent>();

  ngAfterContentInit() {
    this.tabs = this.tabPanels.toArray();
    let index = this.tabs.findIndex(function (el) {
      return el.selected;
    });
    for (let tab of this.tabs) {
      tab.selected = false;
    }
    index = (index === -1) ? 0 : index;
    this.tabs[index].selected = true;
  }

  onTabClick(event: TabEvent) {
    let tab = event.tab;
    let index = this.tabs.findIndex(function (el) {
      return el == tab;
    });
    let selectedIndex = this.tabs.findIndex(function (el) {
      return el.selected;
    });
    this.tabs[index].selected = true;
    this.tabs[selectedIndex].selected = false;

    this.onChange.emit({startEvent: event.startEvent, index: index, header: tab.header});
  }

  onTabClose(event: TabEvent) {
    let tab = event.tab;
    let index = this.tabs.findIndex(function (el) {
      return el == tab;
    });
    let flag = tab.selected;
    this.tabs[index].closed = true;
    this.tabs[index].selected = false;

    if (flag) {
      let tab = this.tabs.find(function (el) {
        return !el.closed;
      });
      tab.selected = true;
    }
    this.onClose.emit({startEvent: event.startEvent, index: index, header: tab.header});
  }

}


