import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyToolbarContent} from "./toolbar-content.component";
import {MyToolbarView} from "./toolbar-view.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MyToolbarView, MyToolbarContent],
  exports: [MyToolbarView, MyToolbarContent]
})
export class MyToolbarViewModule {
}
