import { TestBed } from '@angular/core/testing';

import { FotoAlbumsService } from './foto-albums.service';

describe('FotoAlbumsService', () => {
  let service: FotoAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
