import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MyTabView} from "./myTabView";
import {TabsExampleComponent} from "./TabsExample.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'myTabView', component: TabsExampleComponent}
    ])
  ],
  exports: [RouterModule]
})
export class TabsExampleRoutingModule { }
