import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {TabsExampleModule} from "./tabs-example/tabs-example.module";
import {FormsModule} from "@angular/forms";
import {SliderExampleModule} from "./slider-example/slider-example.module";
import {ToolbarExampleModule} from "./toolbar-example/toolbar-example.module";


@NgModule({
  imports: [
    BrowserModule, FormsModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    SharedModule.forRoot(),
    TabsExampleModule,
    SliderExampleModule,
    ToolbarExampleModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
