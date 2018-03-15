import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarExampleRoutingModule} from "./toolbar-example-routing.module";
import {ToolbarExampleComponent} from "./toolbar-example.component";
import {MyToolbarViewModule} from "../toolbar/toolbar-view.module";


@NgModule({
  imports: [CommonModule, MyToolbarViewModule, ToolbarExampleRoutingModule],
  declarations: [ToolbarExampleComponent],
  exports: [ToolbarExampleComponent]
})
export class ToolbarExampleModule {
}
