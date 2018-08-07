
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

	
import {Input,Component} from '@angular/core';
	
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor() {
 
  }
 
  @Input()
  title:string;
	
  @Input()
  body:string;
 
  @Input()
  foot:string;

}
