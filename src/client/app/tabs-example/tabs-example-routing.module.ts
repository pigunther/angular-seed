import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MyTabView} from "../tab/tab-view";
import {TabsExampleComponent} from "./tabs-example.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'myTabView', component: TabsExampleComponent}
    ])
  ],
  exports: [RouterModule]
})
export class TabsExampleRoutingModule { }
