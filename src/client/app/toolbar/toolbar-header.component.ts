import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-toolbar-header',
  templateUrl: 'toolbar-header.component.html',
  styleUrls: ['toolbar-header.component.css']
})
export class MyToolbarHeader {
  header: string = 'head';

  @Input()
  title: string;
}
