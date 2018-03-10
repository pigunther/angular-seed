import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {ValueChangeEvent} from "./slider-event.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css'],
})
export class MySlider implements AfterViewInit, OnDestroy {

  @Input()
  step: number;

  @Input()
  min: number;

  @Input()
  max: number;

  @Output() onChange = new EventEmitter<ValueChangeEvent>();

  @Input()
  get val(): number {
    return this.circlePos;
  }

  @Output() valChange = new EventEmitter();

  set val(value: number) {
    this.circlePos = value;
    this.valChange.emit(this.circlePos);
  }

  @ViewChild('circle')
  circle: ElementRef;

  slider: any;

  circleStartPos: number;
  sliderLen: number;
  circleRad: number;
  circlePos: number = 0;

  private circleMoveFlag: boolean = false;

  documentMouseMoveListener: Function;
  documentMouseUpListener: Function;

  constructor(private renderer: Renderer2, private ngZone: NgZone) {
  }

  ngAfterViewInit() {
    this.slider = this.circle.nativeElement.parentElement;
    this.circleRad = +this.circle.nativeElement.clientLeft;
    this.sliderLen = this.slider.clientLeft + this.slider.clientWidth;
    this.initStartPos();

    if (this.max != undefined && this.min != undefined) {
      this.circlePos = this.min;
    } else {
      this.max = 100;
      this.min = 0;
    }

    this.setPosition(-this.circleRad);
  }

  initStartPos() {
    this.circleStartPos = this.slider.offsetLeft;
    let elem = this.slider;
    while (elem) {
      this.circleStartPos -= elem.scrollLeft;
      elem = elem.parentElement;
    }
  }

  onMouseDown(event: Event) {
    this.circleMoveFlag = true;

    this.ngZone.runOutsideAngular(() => {
      if (!this.documentMouseMoveListener) {
        this.documentMouseMoveListener = this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
          if (this.circleMoveFlag) {
            this.setPosition(e.clientX);
          }
        });
      }
    });

    if (!this.documentMouseUpListener) {
      this.documentMouseUpListener = this.renderer.listen('document', 'mouseup', (e: MouseEvent) => {
        if (this.circleMoveFlag) {
          this.circleMoveFlag = false;
          this.val = this.circlePos;
          this.onChange.emit({startEvent: e, value: this.circlePos});
        }
      });
    }
  }

  onSliderClick(event: MouseEvent) {
    let tmpCirclePos = this.circlePos;
    this.setPosition(event.clientX);
    this.val = this.circlePos;
    if (tmpCirclePos != this.circlePos)
      this.onChange.emit({startEvent: event, value: this.circlePos});
  }

  setPosition(position: number) {
    this.initStartPos();
    position = position - this.circleStartPos;
    if (this.step)
      position = Math.floor(position / (this.sliderLen / this.step)) * (this.sliderLen / this.step);
    position -= this.circleRad;

    if (position + this.circleRad > this.sliderLen) {
      position = this.sliderLen - this.circleRad;
    } else if (position + this.circleRad < 0) {
      position = -this.circleRad;

    }

    this.circlePos = (position + this.circleRad) / (this.sliderLen) * (this.max - this.min) + this.min;
    this.circle.nativeElement.style.left = position + 'px';
  }


  ngOnDestroy() {
    if (this.documentMouseMoveListener)
      this.documentMouseMoveListener();
    if (this.documentMouseUpListener)
      this.documentMouseUpListener();
  }

}
