import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ContactService } from './service/contact.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';
import { ParticularContactComponent } from './particular-contact/particular-contact.component';



const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'par-contact', component: ParticularContactComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'ourservices', component: OurServicesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    DisplayContactComponent,
    AboutUsComponent,
    OurServicesComponent,
    ContactComponent,
    ParticularContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
