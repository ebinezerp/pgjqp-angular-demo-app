import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ContactService } from './service/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    DisplayContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
