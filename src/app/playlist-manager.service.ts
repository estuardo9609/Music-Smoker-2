import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Playlist } from './playlist';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlaylistManagerService {
  playlists: Playlist[];

  constructor(private http:HttpClient) { }

  getPlaylist(){
    return this.http.get('http://localhost:3001/api/playlists');
  }

  removePlaylist(playlist: Playlist){
    return this.http.delete('http://localhost:3001/api/playlists/'+ playlist._id);
  }

  addPlaylist(playlist: Playlist){
    let body = JSON.stringify(playlist);
    return this.http.post('http://localhost:3001/api/playlists', body, httpOptions);
  }
