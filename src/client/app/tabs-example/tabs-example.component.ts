import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'tabs-example',
  templateUrl: 'tabs-example.component.html',
  styleUrls: [ 'tabs-example.component.css']
})
export class TabsExampleComponent {

  logs: string[] = [];

  onTabChange(event: any) {
    console.log('change:');
    console.log(event);

    this.logs.unshift(`change: header=${event.startEvent.target.innerText}, index=${event.index}`);

  }

  onTabClose(event: any) {
    console.log('close:');
    console.log(event);
    this.logs.unshift(`close: header=${event.startEvent.target.parentElement.parentElement.parentElement.innerText}, index=${event.index}`);
  }

}
