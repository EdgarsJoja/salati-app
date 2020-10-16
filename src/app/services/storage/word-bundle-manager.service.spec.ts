import { TestBed } from '@angular/core/testing';

import { WordBundleManagerService } from './word-bundle-manager.service';

describe('WordBundleManagerService', () => {
  let service: WordBundleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordBundleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
