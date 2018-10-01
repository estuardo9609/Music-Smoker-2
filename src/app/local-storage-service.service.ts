import { Injectable } from '@angular/core';
import { Playlist } from './playlist';

@Injectable({ providedIn: 'root' })

export class LocalStorageServiceService {

  playlists: Playlist[];
  
  constructor() {
   }

   getPlaylist(): Playlist[]{
     if(localStorage.getItem('playlists') === null){
       this.playlists = [];
     } else{
       this.playlists = JSON.parse(localStorage.getItem('playlists'));
     }
     return this.playlists;
   }

   addPlaylist(playlist: Playlist):void{
     this.playlists = [];
     this.playlists.unshift(playlist);
    let playlists;

      if(localStorage.getItem('playlists')===null){
        playlists = [];
        playlists.unshift(playlist);
        localStorage.setItem('playlists',JSON.stringify(playlists));
      } else{
        playlists = JSON.parse(localStorage.getItem('playlists'));
        playlists.unshift(playlist);
        localStorage.setItem('playlists',JSON.stringify(playlists));
      }
   }

   removePlaylist(playlist: Playlist):void{
    if(localStorage.getItem('playlists')===null){}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      for(var i = 0; i<this.playlists.length; i++){
        if(playlist.name == this.playlists[i].name){
          this.playlists.splice(i, 1);
          localStorage.setItem('playlists',JSON.stringify(this.playlists));
        }
      }
    }
  }
}
 