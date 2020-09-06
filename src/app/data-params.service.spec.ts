import { TestBed } from '@angular/core/testing';

import { DataParamsService } from './data-params.service';

describe('DataParamsService', () => {
  let service: DataParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
