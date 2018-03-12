import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewEncapsulation} from '@angular/core';


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-toolbar-content',
  templateUrl: 'toolbar-content.component.html',
  styleUrls: ['toolbar-content.component.css']
})
export class MyToolbarContent implements OnInit{

  mouseDownListener: Function;
  mouseMoveListener: Function;
  mouseUpListener: Function;

  // private moveFlag: boolean = false;

  constructor(private renderer: Renderer2, private elem: ElementRef) {}

  @Output() onMove = new EventEmitter<MouseEvent>();
  @Output() onUp = new EventEmitter<MouseEvent>();


  ngOnInit() {
    // this.mouseDownListener = this.renderer.listen(this.elem.nativeElement, 'mousedown', (e: MouseEvent) => {
    //   console.log(e.clientY);
    // });

    if (!this.mouseMoveListener) {
      this.mouseMoveListener = this.renderer.listen(this.elem.nativeElement, 'mousemove', (e: MouseEvent) => {
        // if (this.moveFlag) {
        //   console.log(e.clientY);
          this.onMove.emit(e);
        // }
      });
    }

  }


}
