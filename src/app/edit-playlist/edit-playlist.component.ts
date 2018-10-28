import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { LocalStorageServiceService} from '../local-storage-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {

  playlist:Playlist;
  arrayIndex:number;

  constructor(private route: ActivatedRoute, public localStorageService: LocalStorageServiceService) { }

  ngOnInit(): void {
    this.getUniquePlaylist(),
    this.getArrayIndex()
  }

  getUniquePlaylist():void{
    this.playlist = this.localStorageService.getUniquePlaylist(+this.route.snapshot.paramMap.get('id'));
  }

  getArrayIndex():void{
    this.arrayIndex = this.localStorageService.getIndex(this.playlist);
  }

  editPlaylist(){
    this.localStorageService.editPlaylist(this.arrayIndex,this.playlist);
  }
}

