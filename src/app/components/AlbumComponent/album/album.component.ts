import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/modelos/albumModelo/album';
import { AlbumsService } from '../../../services/albumsService/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  albumes:[number,string,number,string,string,number,number][];
  constructor(private albumService:AlbumsService) { }

  ngOnInit(): void {
   this.getAllAlbums();
  }

  private getAllAlbums(){
    this.albumService.getAllAlbums().subscribe(albums =>{
     this.albumes = albums.dataVector;
     console.log(this.albumes)
    })
  }

}
