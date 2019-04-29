import { TestBed, inject } from '@angular/core/testing';

import { HarryPotterService } from './harry-potter.service';

describe('HarryPotterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HarryPotterService]
    });
  });

  it('should be created', inject([HarryPotterService], (service: HarryPotterService) => {
    expect(service).toBeTruthy();
  }));
});
