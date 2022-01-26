import { TestBed } from '@angular/core/testing';

import { FetchPlaceService } from './fetch-place.service';

describe('FetchPlaceService', () => {
  let service: FetchPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
