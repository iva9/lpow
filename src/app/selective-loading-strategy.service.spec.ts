import { TestBed } from '@angular/core/testing';

import { SelectiveLoadingStrategyService } from './selective-loading-strategy.service';

describe('SelectiveLoadingStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectiveLoadingStrategyService = TestBed.get(SelectiveLoadingStrategyService);
    expect(service).toBeTruthy();
  });
});
