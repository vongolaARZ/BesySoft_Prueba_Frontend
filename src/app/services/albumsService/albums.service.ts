import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from 'src/app/modelos/albumModelo/album';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  urlApi = `http://192.168.0.109`;
  
  constructor(private httpClient:HttpClient) { }

  getAllAlbums():Observable<Album>{
    return this.httpClient.get<Album>(`${this.urlApi}/albums`)
  }


}
