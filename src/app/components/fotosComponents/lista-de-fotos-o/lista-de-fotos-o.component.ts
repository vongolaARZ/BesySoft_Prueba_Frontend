import { Component, OnInit } from '@angular/core';
import { FotosServiceService } from '../../../services/fotosService/fotos-service.service';
import { FotosOrganizadas } from '../../../modelos/fotosOrganizadas/fotos-organizadas';

@Component({
  selector: 'app-lista-de-fotos-o',
  templateUrl: './lista-de-fotos-o.component.html',
  styleUrls: ['./lista-de-fotos-o.component.css']
})
export class ListaDeFotosOComponent implements OnInit {
  
  fotos:FotosOrganizadas[];
  
  constructor(private fotosService : FotosServiceService) { }
   
  ngOnInit(): void {
    this.getAllFotos();
  }

  private getAllFotos(){
    this.fotosService.getFotosOrganizadas()
    .subscribe(fotosOrganizadas =>{
      this.fotos = fotosOrganizadas;
      console.log(this.fotos);
    })
  }

}
