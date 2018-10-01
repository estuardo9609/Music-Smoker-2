import { Injectable } from '@angular/core';

import { Playlist } from './playlist';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  playlists: Playlist[];
  
  constructor() {
    this.playlists = [];
   }

   getPlaylist(): Playlist[]{
     if(localStorage.getItem('playlists') === null){
       this.playlists = [];
     } else{
       this.playlists = JSON.parse(localStorage.getItem('playlist'));
     }
     return this.playlists;
   }

   addPlaylist(playlist: Playlist):void{
     console.log(playlist.description,playlist.name, playlist.genre,playlist.rate, playlist.hide);
      this.playlists.unshift(playlist);
      let playlists;

      if(localStorage.getItem('playlists')===null){
        playlists = [];
        playlists.unshift(playlist);
        localStorage.setItem('playlists',JSON.stringify(playlists));
      } else{
        console.log(playlist.description);
        playlists = JSON.parse(localStorage.getItem('playlists'));
        playlists.unshift(playlist);
        localStorage.setItem('playlists',JSON.stringify(playlists));
      }
   }

   removePlaylist(playlist: Playlist){
      for(let i = 0; this.playlists.length; i++){
        if(playlist == this.playlists[i]){
          this.playlists.splice(i, 1);
          localStorage.setItem('playlists',JSON.stringify(this.playlists));
        }
      }
   }
}
 