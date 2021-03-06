import {Component, ViewEncapsulation} from '@angular/core';
import {ValueChangeEvent} from "../slider/slider-event.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'slider-example',
  templateUrl: 'slider-example.component.html',
  styleUrls: ['slider-example.component.css']
})
export class SliderExampleComponent {

  logs: string[] = [];
  val: number = -100;
  val2: number;
  val3: number = 0;
  val4: number = 50;
  onSliderStop(event: ValueChangeEvent) {
    this.logs.unshift(`change: value=${event.value}`);
  }


}
