import { TestBed } from '@angular/core/testing';

import { NomineesService } from './nominees.service';

describe('NomineesService', () => {
  let service: NomineesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomineesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
