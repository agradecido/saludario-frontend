import { TestBed } from '@angular/core/testing';

import { FoodEntriesService } from './food-entries.service';

describe('FoodEntriesService', () => {
  let service: FoodEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
