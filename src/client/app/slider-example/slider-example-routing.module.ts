import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SliderExampleComponent} from "./slider-example.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'slider', component: SliderExampleComponent}
    ])
  ],
  exports: [RouterModule]
})
export class SliderExampleRoutingModule {
}
