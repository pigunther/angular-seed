
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyTabHeader} from "./tab-header";
import {MyTabPanel} from "./tab-panel";
import {MyTabView} from "./tab-view";

@NgModule({
  imports: [CommonModule],
  declarations: [MyTabView, MyTabPanel, MyTabHeader],
  exports: [MyTabView, MyTabPanel, MyTabHeader]
})
export class MyTabViewModule {
}
