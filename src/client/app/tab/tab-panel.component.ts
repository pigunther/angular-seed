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
export class MyTabPanel implements OnInit, AfterContentInit, AfterViewInit {

  @Input() header: string;

  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() closable: boolean = false;

  @ContentChild(TemplateRef) customContent: TemplateRef<any>;

  innerTemplate: TemplateRef<any>;

  closed: boolean;


  ngOnInit() {
    console.log('tab ' + this.header + ' was initialized with selected ' + this.selected);
  }

  ngAfterContentInit() {
    this.innerTemplate = this.customContent;
    console.log('tab ' + this.header + ' content was initialized with selected ' + this.selected);
  }

  ngAfterViewInit() {
    this.innerTemplate = this.customContent;
    console.log('tab ' + this.header + ' view was initialized');
  }
  // ngAfterContentChecked() {
  //   console.log('tab ' + this.header + ' checked content ');
  // }
}
