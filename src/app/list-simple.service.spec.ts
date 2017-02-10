/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListSimpleService } from './list-simple.service';

describe('ListSimpleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListSimpleService]
    });
  });

  it('should ...', inject([ListSimpleService], (service: ListSimpleService) => {
    expect(service).toBeTruthy();
  }));
});
