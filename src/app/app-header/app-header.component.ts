import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  fullImagePath: string;

  constructor(
  ) {
    this.fullImagePath = '../../assets/images/MusicSimbol.png'
   }

  title = 'Music Smoker';
  

  ngOnInit() {
  }

}
