import {Component, ViewEncapsulation} from '@angular/core';
import {IndexEvent} from "../tab/tap-panel-events.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'tabs-example',
  templateUrl: 'tabs-example.component.html',
  styleUrls: ['tabs-example.component.css']
})
export class TabsExampleComponent {

  logs: string[] = [];

  onTabChange(event: IndexEvent) {
    this.logs.unshift(`change: header=${event.header}, index=${event.index}`);
  }

  onTabClose(event: IndexEvent) {
    this.logs.unshift(`close: header=${event.header}, index=${event.index}`);
  }

}
