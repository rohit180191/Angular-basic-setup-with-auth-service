import { Component } from '@angular/core';
import { LoopBackConfig } from '../providers/loopback-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){

    LoopBackConfig.setBaseURL('http://phapi.experiencecommerce.com:4500');
    console.log("API set to url :",LoopBackConfig.getPath());

  }
  
}
