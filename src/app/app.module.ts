import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FreqDocsComponent } from '../freq-docs/freq-docs.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, FreqDocsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
