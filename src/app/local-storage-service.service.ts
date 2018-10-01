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
  
  editPlaylist(indexArray: number, playlist: Playlist):void{
    if(localStorage.getItem('playlists')===null){}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      this.playlists[indexArray].name = playlist.name;
      this.playlists[indexArray].description = playlist.description;
      this.playlists[indexArray].genre = playlist.genre;
      this.playlists[indexArray].rate = playlist.rate;
      localStorage.setItem('playlists',JSON.stringify(this.playlists));
      }
  }

  getIndex(playlist: Playlist): number{
    var indexNum = 0;
    if(localStorage.getItem('playlists')===null){}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      for(var i = 0; i<this.playlists.length; i++){
        if(playlist.name == this.playlists[i].name){
          indexNum = i;
        }
      }
    }
    return indexNum;
  }

  getUniquePlaylist(name: string): Playlist{
    var playlist: Playlist;
    playlist = {name:"",
            description:"",
            genre:"",
            rate: 0,
            hide: true};
    if(localStorage.getItem('playlists')===null){return playlist}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      for(var i = 0; i<this.playlists.length; i++){
        if(name == this.playlists[i].name){
          playlist = this.playlists[i];
        }
      }
    }
    return playlist;
  }
}
 