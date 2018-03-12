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
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

