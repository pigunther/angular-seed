import { Component, ViewEncapsulation } from '@angular/core';
import {TabIndexEvent} from "../interfaces/interfaces";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'tabs-example',
  templateUrl: 'tabs-example.component.html',
  styleUrls: [ 'tabs-example.component.css']
})
export class TabsExampleComponent {

  logs: string[] = [];

  onTabChange(event: TabIndexEvent) {
    console.log('change:');
    console.log(event);

    this.logs.unshift(`change: header=${event.startEvent.target.innerText}, index=${event.index}`);

  }

  onTabClose(event: TabIndexEvent) {
    console.log('close:');
    console.log(event);
    this.logs.unshift(`close: header=${event.startEvent.target.parentElement.parentElement.parentElement.innerText}, index=${event.index}`);
  }

}
