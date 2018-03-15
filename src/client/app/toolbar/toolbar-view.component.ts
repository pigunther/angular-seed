import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  Input,
  NgZone, Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {HeaderSizeFlagEvent} from "./toolbar-events.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-toolbar',
  templateUrl: 'toolbar-view.component.html',
  styleUrls: ['toolbar-view.component.css']
})
export class MyToolbarView implements AfterViewInit {

  @Input()
  img: string;

  @Input()
  color: string;

  @Input()
  styleClass: string;

  @Output() onToolbarChange = new EventEmitter<HeaderSizeFlagEvent>();

  headerBigSizeFlag: boolean = true;

  headerStyle: any;

  yPosition: number;

  scrollListener: Function;

  @ViewChild('header', {read: ElementRef}) toolbarHeader: ElementRef;

  constructor(private renderer: Renderer2, private zone: NgZone, private elementRef: ElementRef) {
  }


  ngAfterViewInit() {
    this.headerStyle = this.toolbarHeader.nativeElement.style;
    this.yPosition = this.elementRef.nativeElement.getBoundingClientRect().top;

    this.zone.runOutsideAngular(() => {
      if (!this.scrollListener) {
        this.scrollListener = this.renderer.listen(window, 'scroll', (event: MouseEvent) => {

          let scrolled = window.pageYOffset || document.documentElement.scrollTop;

          if (scrolled >= this.yPosition) {
            this.renderer.addClass(this.elementRef.nativeElement, 'my-toolbar__sticky');
          } else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'my-toolbar__sticky');
          }

          if (scrolled < 20 && this.headerBigSizeFlag) {
            this.changeHeader({startEvent: event, headerBigSizeFlag: this.headerBigSizeFlag});
            this.headerBigSizeFlag = !this.headerBigSizeFlag;
          } else if (scrolled > 20 && !this.headerBigSizeFlag) {
            this.changeHeader({startEvent: event, headerBigSizeFlag: this.headerBigSizeFlag});
            this.headerBigSizeFlag = !this.headerBigSizeFlag;
          }

        });
      }
    });

  }

  changeHeader(event: HeaderSizeFlagEvent) {
    if (event.headerBigSizeFlag) {
      this.renderer.removeClass(this.toolbarHeader.nativeElement, 'my-toolbar__header_min-height');
      this.renderer.addClass(this.toolbarHeader.nativeElement, 'my-toolbar__header_max-height');
    } else {
      this.renderer.removeClass(this.toolbarHeader.nativeElement, 'my-toolbar__header_max-height');
      this.renderer.addClass(this.toolbarHeader.nativeElement, 'my-toolbar__header_min-height');
    }
    this.zone.run(() => {
      this.onToolbarChange.emit(event);
    });
  }
}


