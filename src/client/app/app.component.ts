import {Component, ViewEncapsulation} from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', 'normalize.css'],
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
