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
        playlist._id = playlists.length;
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
  
  editPlaylist(_id: number, playlist: Playlist):void{
    if(localStorage.getItem('playlists')===null){}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      this.playlists[_id].name = playlist.name;
      this.playlists[_id].description = playlist.description;
      this.playlists[_id].genre = playlist.genre;
      this.playlists[_id].rate = playlist.rate;
      this.playlists[_id].author = playlist.author;
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
    playlist = {_id: 0,name:"",
            description:"",
            genre:"",
            rate: 0,
            author: "",
            hide: true};
    if(localStorage.getItem('playlists')===null){return playlist}
    else{
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      for(var i = 0; i<this.playlists.length; i++){
        if(id == this.playlists[i]._id){
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
        this.playlists[i]._id = i;
      }
      localStorage.setItem('playlists',JSON.stringify(this.playlists));
    }
  }
}
 