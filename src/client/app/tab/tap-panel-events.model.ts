

import {MyTabPanel} from "./tab-panel.component";

export interface IndexEvent {
  startEvent: Event;
  index: number;
  header: string;
}


export interface TabEvent {
  startEvent: Event;
  tab: MyTabPanel;
}
