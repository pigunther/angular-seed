import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyToolbarHeader} from "./toolbar-header.component";
import {MyToolbarContent} from "./toolbar-content.component";
import {MyToolbarView} from "./toolbar-view.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MyToolbarView, MyToolbarContent, MyToolbarHeader],
  exports: [MyToolbarView, MyToolbarContent, MyToolbarHeader]
})
export class MyToolbarViewModule {
}
