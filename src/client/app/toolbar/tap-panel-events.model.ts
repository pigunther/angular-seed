

import {MyToolbarContent} from "./toolbar-content.component";

export interface IndexEvent {
  startEvent: Event;
  index: number;
  header: string;
}


export interface TabEvent {
  startEvent: Event;
  tab: MyToolbarContent;
}
