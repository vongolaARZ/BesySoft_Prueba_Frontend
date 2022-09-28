import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/modelos/foto/foto';
import { FotoAlbumsService } from '../../../services/albumsFotoService/foto-albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-fotos-album',
  templateUrl: './lista-fotos-album.component.html',
  styleUrls: ['./lista-fotos-album.component.css']
})
export class ListaFotosAlbumComponent implements OnInit {
  
  fotos:Foto[];

  constructor(
    private fotoAlbumsService:FotoAlbumsService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllAlbumsFotos();
  }

  private getAllAlbumsFotos(){
    let id = this.route.snapshot.paramMap.get("id")

    this.fotoAlbumsService.getFotosAlbum(id)
    .subscribe(data => {
      this.fotos = data.flatMap(data =>{
        return data.list
      })
    })
   
    
  }

}
