import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {PlaylistManagerService} from '../playlist-manager.service';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  playlists;

  constructor(public _playlistManagerService: PlaylistManagerService) { }

  ngOnInit() {
    this.getPlaylist();
  } 


  getPlaylist(){
    this._playlistManagerService.getPlaylist().subscribe(
      data => {this.playlists = data},
      err => console.error(err),
      () => console.log('Se han cargado exitosamente los elementos')
    );
  }

  removePlaylist(playlist: Playlist){
    this._playlistManagerService.removePlaylist(playlist).subscribe(
      err => console.error(err),
      () => alert('Se ha eliminado un elemento con exito')
    );
  }

}
