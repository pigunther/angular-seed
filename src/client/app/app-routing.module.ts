import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TabsExampleComponent} from "./tabs-example/tabs-example.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'MyToolbarView',
        component: TabsExampleComponent,
        data: { title: 'Heroes List' }
      },
      {
        path: '',
        redirectTo: '/MyToolbarView',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

