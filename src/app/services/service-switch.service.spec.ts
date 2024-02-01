import { TestBed } from '@angular/core/testing';

import { ServiceSwitchService } from './service-switch.service';

describe('ServiceSwitchService', () => {
  let service: ServiceSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
