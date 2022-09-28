import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ListaDeFotosOComponent } from './components/fotosComponents/lista-de-fotos-o/lista-de-fotos-o.component';
import { AlbumComponent } from './components/AlbumComponent/album/album.component';
import { ListaFotosAlbumComponent } from './components/listaFotoAlbumComponent/lista-fotos-album/lista-fotos-album.component';


const routes: Routes = [
  { path: 'gallery/', component: ListaDeFotosOComponent},
  { path: '', redirectTo:"gallery/", pathMatch:'full'},
  { path: 'albums', component:AlbumComponent},
  { path: 'albums/:id', component:ListaFotosAlbumComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }