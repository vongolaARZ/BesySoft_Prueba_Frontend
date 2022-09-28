import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FotosOrganizadas } from '../../modelos/fotosOrganizadas/fotos-organizadas';

@Injectable({
  providedIn: 'root'
})
export class FotoAlbumsService{
  urlApi = `http://192.168.0.109`;


  constructor(
    private httpClient:HttpClient) { }


  getFotosAlbum(id:string|null):Observable<FotosOrganizadas[]>{
    return this.httpClient.get<FotosOrganizadas[]>(`${this.urlApi}/albums/listPhoto/${id}`)
  }

  
}
