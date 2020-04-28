import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1Q2Component } from './q1-q2/q1-q2.component';
import { Q3Component } from './q3/q3.component';

@NgModule({
  declarations: [
    AppComponent,
    Q1Q2Component,
    Q3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
