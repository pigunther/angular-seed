import {Component, EventEmitter, OnDestroy, OnInit, Output, Renderer2, ViewEncapsulation} from '@angular/core';
import {HeaderSizeFlagEvent} from "./toolbar-events.model";


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-toolbar-content',
  templateUrl: 'toolbar-content.component.html',
  styleUrls: ['toolbar-content.component.css']
})
export class MyToolbarContent implements OnInit, OnDestroy {

  scrollListener: Function;

  constructor(private renderer: Renderer2) {
  }

  @Output() changeHeader = new EventEmitter<HeaderSizeFlagEvent>();

  headerBigSizeFlag: boolean = true;


  ngOnInit() {
    if (!this.scrollListener) {
      this.scrollListener = this.renderer.listen(window, 'scroll', (event: MouseEvent) => {
        // console.log('move');
        // console.log(this.headerBigSizeFlag);

        let scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled < 20 && this.headerBigSizeFlag) {
          // console.log('emit big');
          this.changeHeader.emit({startEvent: event, headerBigSizeFlag: this.headerBigSizeFlag});
          this.headerBigSizeFlag = !this.headerBigSizeFlag;
        } else if (scrolled > 20 && !this.headerBigSizeFlag) {
          // console.log('emit small');
          this.changeHeader.emit({startEvent: event, headerBigSizeFlag: this.headerBigSizeFlag});
          this.headerBigSizeFlag = !this.headerBigSizeFlag;
        }

      });
    }
  }

  ngOnDestroy() {
    this.scrollListener();
  }


}
