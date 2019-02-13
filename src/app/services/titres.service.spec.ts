import { TestBed } from '@angular/core/testing';

import { TitresService } from './titres.service';

describe('TitresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitresService = TestBed.get(TitresService);
    expect(service).toBeTruthy();
  });
});
