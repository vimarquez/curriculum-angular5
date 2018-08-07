
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import {Study}	 from './study.model';
@Component({
  selector: 'study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent {
  studies = [
	  new Study('2009-2014', 'Universidad de Granada(España)','Graduado Ingeniería Informática, especialidad Ingeniería del Software'),
	  new Study('2013-2014', 'Graduado Ingeniería Informática','Universita Hradec Králové(Chequia)')
  ];
  constructor() {

  }
 

 

}
