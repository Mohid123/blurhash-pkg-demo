import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxBlurhashModule } from 'ngx-blurhash-render';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBlurhashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
