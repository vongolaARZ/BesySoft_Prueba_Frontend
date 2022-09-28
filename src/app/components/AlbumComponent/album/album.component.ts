import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../services/albumsService/albums.service';
import { CardAlbum } from '../../../modelos/albumModelo/card-album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  albumes:CardAlbum[]=[];
  constructor(private albumService:AlbumsService) { }

  ngOnInit(): void {
   this.getAllAlbums();
  }

  private getAllAlbums(){
    this.albumService.getAllAlbums().subscribe(albums =>{
    albums.dataVector.forEach(data => {
      this.albumes.push(new CardAlbum(data[0],data[1],data[4]))
    })
    })
  }

}
