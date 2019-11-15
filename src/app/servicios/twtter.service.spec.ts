import { TestBed } from '@angular/core/testing';

import { TwtterService } from './twtter.service';

describe('TwtterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwtterService = TestBed.get(TwtterService);
    expect(service).toBeTruthy();
  });
});
