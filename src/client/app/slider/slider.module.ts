import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MySlider} from "./slider.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MySlider],
  exports: [MySlider]
})
export class MySliderModule {
}
