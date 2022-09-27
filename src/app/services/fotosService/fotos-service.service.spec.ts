import { TestBed } from '@angular/core/testing';

import { FotosServiceService } from './fotos-service.service';

describe('FotosServiceService', () => {
  let service: FotosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
