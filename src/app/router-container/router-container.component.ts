import { Component, OnInit } from '@angular/core';
import {LocalStorageServiceService} from '../local-storage-service.service'
import { Playlist } from '../playlist';
import {PlaylistManagerService} from '../playlist-manager.service';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-router-container',
  templateUrl: './router-container.component.html',
  styleUrls: ['./router-container.component.css']
})
export class RouterContainerComponent implements OnInit {

  constructor(public _PlaylistManagerService: PlaylistManagerService) { }

  ngOnInit() {
  }

  addPlaylist(playlist: Playlist){
    this._PlaylistManagerService.addPlaylist(playlist).subscribe(
      err => console.error(err),
      response => {
        alert(response.error.message);
      },
      () => alert('Se ha agregado exitosamente el playlist')
    );
  }

}
