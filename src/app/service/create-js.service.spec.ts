import { TestBed } from '@angular/core/testing';

import { CreateJsService } from './createjs.service';

describe('CreateJsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateJsService = TestBed.get(CreateJsService);
    expect(service).toBeTruthy();
  });
});
