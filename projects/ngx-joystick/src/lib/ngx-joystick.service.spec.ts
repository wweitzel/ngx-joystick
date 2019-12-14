import { TestBed } from '@angular/core/testing';

import { NgxJoystickService } from './ngx-joystick.service';

describe('NgxJoystickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxJoystickService = TestBed.get(NgxJoystickService);
    expect(service).toBeTruthy();
  });
});
