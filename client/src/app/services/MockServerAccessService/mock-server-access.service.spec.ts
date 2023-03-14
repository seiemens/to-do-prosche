import { TestBed } from '@angular/core/testing';

import { MockServerAccessService } from './mock-server-access.service';

describe('MockServerAccessService', () => {
  let service: MockServerAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockServerAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
