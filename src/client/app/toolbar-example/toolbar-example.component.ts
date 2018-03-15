import {Component, ViewEncapsulation} from '@angular/core';
import {HeaderSizeFlagEvent} from "../toolbar/toolbar-events.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'toolbar-example',
  templateUrl: 'toolbar-example.component.html',
  styleUrls: ['toolbar-example.component.css']
})
export class ToolbarExampleComponent {
  logs: string[] = [];

  onToolbarChange(event: HeaderSizeFlagEvent) {
    this.logs.unshift(`toolbar's changed: is toolbar big? =${event.headerBigSizeFlag}`);
  }

}
