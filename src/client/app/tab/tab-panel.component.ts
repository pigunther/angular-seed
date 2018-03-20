import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  Input,
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
export class MyTabPanel  {

  @Input() header: string;

  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() closable: boolean = false;
  @ContentChild("customContent") customContentTemplate: TemplateRef<any>;

  closed: boolean;
}
