import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyTabViewModule} from "../tab/tab-view.module";
import {TabsExampleRoutingModule} from "./tabs-example-routing.module";
import {TabsExampleComponent} from "./tabs-example.component";


@NgModule({
  imports: [CommonModule, MyTabViewModule, TabsExampleRoutingModule],
  declarations: [TabsExampleComponent],
  exports: [TabsExampleComponent]
})
export class TabsExampleModule {
}
