import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ListaDeFotosOComponent } from './components/fotosComponents/lista-de-fotos-o/lista-de-fotos-o.component';
import { Album } from './modelos/albumModelo/album';
import { AlbumComponent } from './components/AlbumComponent/album/album.component';


const routes: Routes = [
  { path: 'gallery/', component: ListaDeFotosOComponent},
  { path: '', redirectTo:"gallery/", pathMatch:'full'},
  { path: 'albums', component:AlbumComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }