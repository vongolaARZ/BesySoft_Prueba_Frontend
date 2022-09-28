import { Component, OnInit } from '@angular/core';
import { FotosServiceService } from '../../../services/fotosService/fotos-service.service';
import { Foto } from 'src/app/modelos/foto/foto';

@Component({
  selector: 'app-lista-de-fotos-o',
  templateUrl: './lista-de-fotos-o.component.html',
  styleUrls: ['./lista-de-fotos-o.component.css']
})
export class ListaDeFotosOComponent implements OnInit {
  
  fotos:Foto[];
  
  constructor(private fotosService : FotosServiceService) { }
   
  ngOnInit(): void {
    this.getAllFotos();
  }

  private getAllFotos(){
    this.fotosService.getFotosOrganizadas()
    .subscribe(fotosOrganizadas =>{
      this.fotos = fotosOrganizadas.flatMap(fotos =>{
        return fotos.list
      })
    })
     
  }

}
