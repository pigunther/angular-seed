import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'tabsExample',
  templateUrl: 'TabsExample.component.html',
  //styleUrls: [ 'myTabView.component.css']
})
export class TabsExampleComponent {


  onTabChange(event: any) {
    console.log('change:');
    console.log(event);
  }

  onTabClose(event: any) {
    console.log('close:');
    console.log(event);
  }

}
