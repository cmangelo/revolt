import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { InfoModule } from './info/info.module';
import { FeedsModule } from './feeds/feeds.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ContactModule,
    InfoModule,
    FeedsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
