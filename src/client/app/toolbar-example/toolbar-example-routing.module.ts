import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToolbarExampleComponent} from "./toolbar-example.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'toolbar', component: ToolbarExampleComponent}
    ])
  ],
  exports: [RouterModule]
})
export class ToolbarExampleRoutingModule {
}
