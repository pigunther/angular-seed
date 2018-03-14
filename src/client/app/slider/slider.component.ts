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
    return this.circlePosition;
  }

  @Output() valChange = new EventEmitter();

  set val(value: number) {
    this.circlePosition = value;
    this.valChange.emit(this.circlePosition);
  }

  @ViewChild('circle')
  circle: ElementRef;

  @ViewChild('load')
  loader: ElementRef;

  slider: HTMLDivElement;

  circleStartPosition: number;
  sliderLength: number;
  circleRadius: number;
  circlePosition: number = 0;

  private circleMoveFlag: boolean = false;

  documentMouseMoveListener: Function;
  documentMouseUpListener: Function;

  constructor(private renderer: Renderer2, private ngZone: NgZone) {
  }

  ngAfterViewInit() {
    this.slider = this.circle.nativeElement.parentElement;
    this.circleRadius = +this.circle.nativeElement.clientLeft;
    this.sliderLength = this.slider.clientLeft + this.slider.clientWidth;
    this.initStartPos();

    if (this.max != undefined && this.min != undefined) {
      this.circlePosition = this.min;
    } else {
      this.max = 100;
      this.min = 0;
    }

    this.setPosition(-this.circleRadius);
  }

  initStartPos() {
    this.circleStartPosition = this.slider.getBoundingClientRect().left;
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
          this.val = this.circlePosition;
          this.onChange.emit({startEvent: e, value: this.circlePosition});
        }
      });
    }
  }

  onSliderClick(event: MouseEvent) {
    let tmpCirclePos = this.circlePosition;
    this.setPosition(event.clientX);
    this.val = this.circlePosition;
    if (tmpCirclePos != this.circlePosition) {
      this.onChange.emit({startEvent: event, value: this.circlePosition});
    }

  }

  setPosition(position: number) {
    this.initStartPos();
    position = position - this.circleStartPosition;
    if (this.step) {
      position = Math.round(position / (this.sliderLength / this.step)) * (this.sliderLength / this.step);
    }
    position -= this.circleRadius;

    if (position + this.circleRadius > this.sliderLength) {
      position = this.sliderLength - this.circleRadius;
    } else if (position + this.circleRadius < 0) {
      position = -this.circleRadius;

    }

    this.circlePosition = (position + this.circleRadius) / (this.sliderLength) * (this.max - this.min) + this.min;
    this.circle.nativeElement.style.left = position + 'px';
    this.loader.nativeElement.style.width = (10+position) + 'px';
  }


  ngOnDestroy() {
    if (this.documentMouseMoveListener)
      this.documentMouseMoveListener();
    if (this.documentMouseUpListener)
      this.documentMouseUpListener();
  }

}
