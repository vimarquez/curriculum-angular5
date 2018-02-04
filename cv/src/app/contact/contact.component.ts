import {
    NgModule,
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    FormsModule,
    FormGroup,
    FormControl
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { Contact }    from './contact.model';


// run the plugin to work with version 4 of bootstrap

 

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor() {
 
  }
 
  @ViewChild('f') form: any;

   model: Contact = new Contact(0,'','');

  submitted = false;
 
  onSubmit() {  
	
  }
 

}
