import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild, ContentChildren,
  ElementRef,
  Input, QueryList, Renderer, Renderer2, TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MyToolbarContent} from "./toolbar-content.component";
import {MyToolbarHeader} from "./toolbar-header.component";
import {unescape} from "querystring";


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

  @Input()
  title: string;

  currentImgHeight: number = 150;

  mouseYlast: number;

  headerStyle: any;

  @ViewChild('header', {read: ElementRef}) toolbarHeader: ElementRef;
  // @ViewChild('img', {read: ElementRef}) toolbarHeader: ElementRef;
  @ContentChild(MyToolbarContent) toolbarContent: MyToolbarContent;


  constructor() {}


  ngAfterContentInit() {
    this.toolbarContent.onMove.subscribe((event: MouseEvent) =>
      this.onMove(event)
    );
      // this.toolbarContent.onUp.subscribe((event: MouseEvent) =>
      //   this.onUp(event)
      // )


  }

  ngAfterViewInit() {
    this.headerStyle = this.toolbarHeader.nativeElement.style;

    console.log(this.toolbarHeader);

    if (this.color)
      this.headerStyle.backgroundColor = this.color;

    if (this.img) {
      this.headerStyle.backgroundImage = 'url('+this.img+')';
      this.headerStyle.height = this.currentImgHeight+'px'
    }
  }

  onMove(event: MouseEvent) {

    if (!(this.mouseYlast == undefined)) {
      console.log((event.clientY  - this.mouseYlast));

      this.currentImgHeight += (event.clientY  - this.mouseYlast);
      this.mouseYlast = undefined;
      if (this.currentImgHeight <= 50) {
        console.log('here');
        this.headerStyle.backgroundImage = "";
        this.currentImgHeight = 50;
      } else {
        this.headerStyle.backgroundImage = 'url('+this.img+')';
        if (this.currentImgHeight >= 150) {
          this.headerStyle.height = this.currentImgHeight + 'px';
          this.currentImgHeight = 150;
        } else {
          this.mouseYlast = event.clientY;
          this.headerStyle.height = this.currentImgHeight + 'px';
        }
      }
      console.log(this.currentImgHeight + 'px');
    } else {
      this.mouseYlast = event.clientY;
    }


    // console.log(event.clientY);
  }
  onUp(event: MouseEvent) {
    console.log(event.clientY);
  }
}


