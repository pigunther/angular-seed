
import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-example',
  template: `
    <div>{{name}}: example component</div>`
})
export class ExampleComponent implements OnInit {

  @Input()
  name: string;

  ngOnInit(): void {
    console.log(`Example component with name ${name} initialized.`);
  }
}
