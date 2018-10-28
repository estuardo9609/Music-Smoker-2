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
        playlist.id = playlists.length;
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
      this.sortList();
    }
  }
  
  editPlaylist(id: number, playlist: Playlist):void{
    if(localStorage.getItem('playlists')===null){}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      this.playlists[id].name = playlist.name;
      this.playlists[id].description = playlist.description;
      this.playlists[id].genre = playlist.genre;
      this.playlists[id].rate = playlist.rate;
      this.playlists[id].author = playlist.author;
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

  getUniquePlaylist(id: number): Playlist{
    var playlist: Playlist;
    playlist = {id: 0,name:"",
            description:"",
            genre:"",
            rate: 0,
            author: "",
            hide: true};
    if(localStorage.getItem('playlists')===null){return playlist}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      for(var i = 0; i<this.playlists.length; i++){
        if(id == this.playlists[i].id){
          playlist = this.playlists[i];
        }
      }
    }
    return playlist;
  }

  sortList(): void{
    var indexJson: number;
    if(localStorage.getItem('playlists')===null){}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      for(var i = 0; i<this.playlists.length; i++){
        this.playlists[i].id = i;
      }
      localStorage.setItem('playlists',JSON.stringify(this.playlists));
    }
  }
}
 