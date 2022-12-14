import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaDeFotosOComponent } from './components/fotosComponents/lista-de-fotos-o/lista-de-fotos-o.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumComponent } from './components/AlbumComponent/album/album.component';
import { ListaFotosAlbumComponent } from './components/listaFotoAlbumComponent/lista-fotos-album/lista-fotos-album.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeFotosOComponent,
    AlbumComponent,
    ListaFotosAlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
