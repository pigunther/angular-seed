import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {ValueChangeEvent} from "./slider-event.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'my-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css'],
})
export class MySlider implements  AfterViewInit {

  @Input()
  step: number;

  @Input()
  min: number;

  @Input()
  max: number;

  @Output() onChange = new EventEmitter<ValueChangeEvent>();

  @Input()
  get val(): number {
    console.log('get');
    // return 2;
    return this.circlePos;
  }

  @Output() valChange = new EventEmitter();
  set val(value: number) {
    this.circlePos = value;
    if (value === undefined) {
      console.log('undefined');
      this.circlePos = 0;
      this.val=0;
    }
    console.log('set');
    this.valChange.emit(this.circlePos);
    // this.setPosition((value-this.min)/(this.max-this.min)*this.sliderLen);
    // this.onChange.emit({startEvent: event, value: this.circlePos});
  }

  @ViewChild('circle')
  circle: ElementRef;

  slider: any;

  circleStartPos: number;
  sliderLen: number;
  circleRad: number;
  circlePos: number = 0;

  circleMoveFlag: boolean = false;

  documentMouseMoveListener: Function;
  documentMouseUpListener: Function;

  constructor(private renderer: Renderer2, private ngZone: NgZone, private  cdr: ChangeDetectorRef) {
  }

  // ngOnInit(){
  //   // console.log('init');
  //   if (!this.val)
  //     this.val = 0;
  // }

  ngAfterViewInit(){
    if (!this.val)
      this.val = 0;

    this.slider = this.circle.nativeElement.parentElement;
    this.circleRad = +this.circle.nativeElement.clientLeft;
    this.circleStartPos = this.slider.offsetLeft;
    this.sliderLen = this.slider.clientLeft + this.slider.clientWidth;

    // console.log(this.circle);
    // console.log(this.slider);

    if (this.max != undefined && this.min != undefined) {
      this.circlePos = this.min;
      this.val = this.circlePos;
    } else {
      this.max = 100;
      this.min = 0;
    }

    this.setPosition(-this.circleRad);
    this.cdr.detectChanges();
  }


  onMouseDown(event: Event) {
    // console.log('mouse down');
    this.circleMoveFlag = true;

    this.ngZone.runOutsideAngular(() => {
      if (!this.documentMouseMoveListener) {
        // window.document.addEventListener('mousemove', this.documentMouseMove.bind(this, event));
        this.documentMouseMoveListener = this.renderer.listen('document', 'mousemove', e => {
          if (this.circleMoveFlag) {
            this.ngZone.run(() => {
              this.setPosition(e.clientX);
            })
          }
        });
      }

      if (!this.documentMouseUpListener) {
        // window.document.addEventListener('mouseup', this.documentMouseUp.bind(this, event));
        this.documentMouseUpListener = this.renderer.listen('document', 'mouseup', e => {
          if (this.circleMoveFlag) {
            this.ngZone.run(() => {
              this.circleMoveFlag = false;
              this.val = this.circlePos;
              this.onChange.emit({startEvent: e, value: this.circlePos});
            })
          }
        });
      }
    });
    // console.log('mouse down end');
  }

  // documentMouseMove(e: Event) {
  //   if (this.circleMoveFlag) {
  //     this.ngZone.run(() => {
  //       this.coords = e.clientX;
  //       this.setPosition(e.clientX);
  //     })
  //   }
  // }
  //
  // documentMouseUp(e: Event) {
  //   if (this.circleMoveFlag){
  //     this.circleMoveFlag = false;
  //     this.val = this.circlePos;
  //     this.onChange.emit({startEvent: e, value: this.circlePos});
  //   }
  // }

  onSliderClick(event: Event) {
      let tmpCirclePos = this.circlePos;
      this.setPosition(event.clientX);
      this.val = this.circlePos;
      if (tmpCirclePos != this.circlePos)
        this.onChange.emit({startEvent: event, value: this.circlePos});
  }

  setPosition(position: number) {
    position = position - this.circleStartPos;
    if (this.step)
      position = Math.floor(position/(this.sliderLen/this.step))*(this.sliderLen/this.step);
    position -= this.circleRad;

    if (position + this.circleRad > this.sliderLen) {
      position = this.sliderLen - this.circleRad;
    } else if (position + this.circleRad < 0) {
      position = -this.circleRad;

    }

    this.circlePos = (position + this.circleRad) / (this.sliderLen) * (this.max - this.min) + this.min;
    this.circle.nativeElement.style.left = position + 'px';
  }

}
