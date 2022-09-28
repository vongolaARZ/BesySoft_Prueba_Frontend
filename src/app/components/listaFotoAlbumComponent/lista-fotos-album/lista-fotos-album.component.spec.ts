import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFotosAlbumComponent } from './lista-fotos-album.component';

describe('ListaFotosAlbumComponent', () => {
  let component: ListaFotosAlbumComponent;
  let fixture: ComponentFixture<ListaFotosAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFotosAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFotosAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
