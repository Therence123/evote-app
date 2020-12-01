import { TestBed } from '@angular/core/testing';

import { EvotecombService } from './evotecomb.service';

describe('EvotecombService', () => {
  let service: EvotecombService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvotecombService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
