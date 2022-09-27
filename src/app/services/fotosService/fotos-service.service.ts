import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotosOrganizadas } from '../../modelos/fotosOrganizadas/fotos-organizadas';

@Injectable({
  providedIn: 'root'
})
export class FotosServiceService {
  
  urlApi = `http://192.168.0.109`;
  constructor(private httpClient:HttpClient){ }

  getFotosOrganizadas():Observable<FotosOrganizadas[]>{
   return this.httpClient.get<FotosOrganizadas[]>(`${this.urlApi}/gallery/`);
  }
}
