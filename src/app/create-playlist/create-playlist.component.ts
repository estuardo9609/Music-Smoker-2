import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  name: string;
  description: string;
  genre: string;
  rate: number;
  @Output() playlistAdded = new EventEmitter<Playlist>();

  constructor() { }

  ngOnInit() {
  }
  
  addPlaylist(){
    this.playlistAdded.emit({
      name:this.name,
      description:this.description,
      genre:this.genre,
      rate:this.rate,
      hide:true
    });
    this.name = '';
    this.description = '';
    this.genre = '';
    this.rate = 0;  
  }
}
