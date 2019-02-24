import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LocationsService } from './locations.service';

describe('LocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: LocationsService = TestBed.get(LocationsService);
    expect(service).toBeTruthy();
  });
});
