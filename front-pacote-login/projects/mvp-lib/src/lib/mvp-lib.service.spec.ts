import { TestBed } from '@angular/core/testing';

import { MvpLibService } from './mvp-lib.service';

describe('MvpLibService', () => {
  let service: MvpLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
