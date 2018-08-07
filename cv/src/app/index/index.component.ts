import { Component, Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
@Injectable()
export class IndexComponent {
  title = 'app';
}
