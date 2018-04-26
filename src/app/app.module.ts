import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DndListModule } from 'ngx-drag-and-drop-lists';
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DndListModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
