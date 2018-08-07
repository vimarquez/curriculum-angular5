import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HomeComponent} from './home/home.component';
import {routing} from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import {IndexComponent} from './index/index.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';
import {StudyComponent} from './study/study.component';
import {CardComponent} from './study/card.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap';
import {ProfileComponent} from './profile/profile.component';
import {ExperienceComponent} from './experience/experience.component';
import {KnowledgesComponent} from './knowledges/knowledges.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    GalleryComponent,
    StudyComponent,
    CardComponent,
    ProfileComponent,
    HomeComponent,
    ExperienceComponent,
    KnowledgesComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    routing,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule    
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
