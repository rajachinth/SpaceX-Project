import { TestBed } from '@angular/core/testing';

import { SpaceXServiceService } from './space-xservice.service';

describe('SpaceXServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceXServiceService = TestBed.get(SpaceXServiceService);
    expect(service).toBeTruthy();
  });
});
