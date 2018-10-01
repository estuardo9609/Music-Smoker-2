import { Component, OnInit } from '@angular/core';
import {LocalStorageServiceService} from '../local-storage-service.service'
import { Playlist } from '../playlist';


@Component({
  selector: 'app-router-container',
  templateUrl: './router-container.component.html',
  styleUrls: ['./router-container.component.css']
})
export class RouterContainerComponent implements OnInit {

  constructor(public localStorageService: LocalStorageServiceService) { }

  ngOnInit() {
  }

  addPlaylist(playlist: Playlist){
    this.localStorageService.addPlaylist(playlist);
  }

}
