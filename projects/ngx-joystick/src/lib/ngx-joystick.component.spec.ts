import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJoystickComponent } from './ngx-joystick.component';

describe('NgxJoystickComponent', () => {
  let component: NgxJoystickComponent;
  let fixture: ComponentFixture<NgxJoystickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJoystickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJoystickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
