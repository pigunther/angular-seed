import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MyToolbarContent} from "./toolbar-content.component";
import {HeaderSizeFlagEvent} from "./toolbar-events.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-toolbar',
  templateUrl: 'toolbar-view.component.html',
  styleUrls: ['toolbar-view.component.css']
})
export class MyToolbarView implements AfterContentInit, AfterViewInit {

  @Input()
  img: string;

  @Input()
  color: string;

  headerBigSizeFlag: boolean = true;

  headerStyle: any;

  @ViewChild('header', {read: ElementRef}) toolbarHeader: ElementRef;
  @ContentChild(MyToolbarContent) toolbarContent: MyToolbarContent;

  constructor(private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.toolbarContent.changeHeader.subscribe((event: HeaderSizeFlagEvent) =>
      this.changeHeader(event)
    )
  }

  ngAfterViewInit() {
    this.headerStyle = this.toolbarHeader.nativeElement.style;

    if (this.color)
      this.headerStyle.backgroundColor = this.color;

    if (this.img) {
      this.headerStyle.backgroundImage = 'url(' + this.img + ')';
    }
  }

  changeHeader(event: HeaderSizeFlagEvent) {
    console.log(this.headerBigSizeFlag);
    console.log('handle emit');
    if (event.headerBigSizeFlag) {
      this.renderer.removeClass(this.toolbarHeader.nativeElement, 'my-toolbar__header_min-height');
      this.renderer.addClass(this.toolbarHeader.nativeElement, 'my-toolbar__header_max-height');
    } else {
      this.renderer.removeClass(this.toolbarHeader.nativeElement, 'my-toolbar__header_max-height');
      this.renderer.addClass(this.toolbarHeader.nativeElement, 'my-toolbar__header_min-height');
    }
  }
}


