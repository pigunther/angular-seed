import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyToolbarView} from "./toolbar-view.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MyToolbarView],
  exports: [MyToolbarView]
})
export class MyToolbarViewModule {
}
