import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {LocalStorageServiceService} from '../local-storage-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  playlists: Playlist[];

  constructor(public localStorageService: LocalStorageServiceService) { }

  ngOnInit() {
    this.playlists = this.localStorageService.getPlaylist();
  }

  removePlaylist(playlist: Playlist){
    const response = confirm('Are you sure you want to delete task');

  }

}
