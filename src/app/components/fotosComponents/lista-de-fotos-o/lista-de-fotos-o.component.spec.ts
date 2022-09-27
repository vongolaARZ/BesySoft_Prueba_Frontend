import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeFotosOComponent } from './lista-de-fotos-o.component';

describe('ListaDeFotosOComponent', () => {
  let component: ListaDeFotosOComponent;
  let fixture: ComponentFixture<ListaDeFotosOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeFotosOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeFotosOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
