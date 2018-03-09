import {
  AfterContentInit, AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';


@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-tab-panel',
  templateUrl: 'tab-panel.component.html',
  styleUrls: ['tab-panel.component.css']
})
export class MyTabPanel implements AfterContentInit, AfterViewInit {

  @Input() header: string;

  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() closable: boolean = false;

  @ContentChild(TemplateRef) customContent: TemplateRef<any>;

  innerTemplate: TemplateRef<any>;

  closed: boolean;


  ngAfterContentInit() {
    this.innerTemplate = this.customContent;
  }

  ngAfterViewInit() {
    this.innerTemplate = this.customContent;
  }

}
