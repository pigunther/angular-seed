import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyTabViewModule} from "../tab/tab-view.module";
import {SliderExampleRoutingModule} from "./slider-example-routing.module";
import {SliderExampleComponent} from "./slider-example.component";
import {MySliderModule} from '../slider/slider.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [CommonModule, MyTabViewModule, SliderExampleRoutingModule, MySliderModule, FormsModule],
  declarations: [SliderExampleComponent],
  exports: [SliderExampleComponent]
})
export class SliderExampleModule {
}
