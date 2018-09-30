import { Component, OnInit } from '@angular/core';
import { Playlists, Playlist } from '../playlist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  playlists = Playlists;

  ngOnInit() {
  }

}
