import { TestBed } from '@angular/core/testing';

import { PavadinimasService } from './pavadinimas.service';

describe('PavadinimasService', () => {
  let service: PavadinimasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PavadinimasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
