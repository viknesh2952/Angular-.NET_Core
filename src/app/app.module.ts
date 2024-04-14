import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UtilitiesModule } from './utilities/utilities.module';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,BrowserAnimationsModule,NgbModule,
    UtilitiesModule,LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
