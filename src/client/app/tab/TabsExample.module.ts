import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTabViewModule} from "./myTabView";
import {TabsExampleRoutingModule} from "./TabsExample-routing.module";
import {TabsExampleComponent} from "./TabsExample.component";
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  imports: [CommonModule, TabViewModule, TabsExampleRoutingModule, MyTabViewModule],
  declarations: [TabsExampleComponent],
  exports: [TabsExampleComponent]
})
export class TabsExampleModule {}
