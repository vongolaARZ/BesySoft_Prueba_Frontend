import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../services/albumsService/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  albumes:string[]=[];
  id : number;
  constructor(private albumService:AlbumsService) { }

  ngOnInit(): void {
   this.getAllAlbums();
  }

  private getAllAlbums(){
    this.albumService.getAllAlbums().subscribe(albums =>{
    albums.dataVector.forEach(data => {
      this.albumes.push(data[4])
      this.id = data[0]
    })
    })
  }

}
