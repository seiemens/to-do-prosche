import { TestBed } from '@angular/core/testing';

import { HttpServerAccessService } from './http-server-access.service';

describe('HttpServerAccessService', () => {
  let service: HttpServerAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServerAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
