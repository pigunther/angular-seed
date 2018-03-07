import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyTabHeader} from "./tab-header.component";
import {MyTabPanel} from "./tab-panel.component";
import {MyTabView} from "./tab-view.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MyTabView, MyTabPanel, MyTabHeader],
  exports: [MyTabView, MyTabPanel, MyTabHeader]
})
export class MyTabViewModule {
}
