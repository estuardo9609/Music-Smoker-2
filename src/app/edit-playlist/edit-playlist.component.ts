import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { LocalStorageServiceService} from '../local-storage-service.service'
import { ActivatedRoute } from '@angular/router';
import {PlaylistManagerService} from '../playlist-manager.service';
import {Observable, of} from 'rxjs';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {

  playlist;
  arrayIndex:number;

  constructor(private route: ActivatedRoute, public _playlistManagerService: PlaylistManagerService) { }

  ngOnInit(): void {
    this.getUniquePlaylist()
  }

  getUniquePlaylist():void{
    this._playlistManagerService.getUniquePlaylist(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {this.playlist = data},
      err => console.error(err),
      () => console.log('Se ha obtenido el elemento por id')
    );
  }

  editPlaylist(){
    this._playlistManagerService.editPlaylist(this.route.snapshot.paramMap.get('id'), this.playlist).subscribe(
      err => console.error(err),
      response => {
        alert(response.error.message);
      },
      () => alert('Se modificado exitosamente el playlist')
    );
  }
}

