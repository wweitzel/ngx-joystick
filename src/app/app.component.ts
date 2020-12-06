import { Component, OnInit, ViewChild } from '@angular/core';
import { JoystickEvent, NgxJoystickComponent } from 'ngx-joystick';
import { JoystickManagerOptions, JoystickOutputData } from 'nipplejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngx-joystick-demo';
  @ViewChild('staticJoystic') staticJoystick: NgxJoystickComponent;
  @ViewChild('dynamicJoystick') dynamicJoystick: NgxJoystickComponent;
  @ViewChild('semiJoystick') semiJoystick: NgxJoystickComponent;

  staticOptions: JoystickManagerOptions = {
    mode: 'static',
    position: { left: '50%', top: '50%' },
    color: 'blue',
  };

  dynamicOptions: JoystickManagerOptions = {
    mode: 'dynamic',
    color: 'red',
    multitouch: true
  };

  semiOptions: JoystickManagerOptions = {
    mode: 'semi',
    catchDistance: 50,
    color: 'purple'
  };

  staticOutputData: JoystickOutputData;
  semiOutputData: JoystickOutputData;
  dynamicOutputData: JoystickOutputData;

  directionStatic: string;
  interactingStatic: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onStartStatic(event: JoystickEvent) {
    this.interactingStatic = true;
  }

  onEndStatic(event: JoystickEvent) {
    this.interactingStatic = false;
  }

  onMoveStatic(event: JoystickEvent) {
    this.staticOutputData = event.data;
  }

  onPlainUpStatic(event: JoystickEvent) {
    this.directionStatic = 'UP';
  }

  onPlainDownStatic(event: JoystickEvent) {
    this.directionStatic = 'DOWN';
  }

  onPlainLeftStatic(event: JoystickEvent) {
    this.directionStatic = 'LEFT';
  }

  onPlainRightStatic(event: JoystickEvent) {
    this.directionStatic = 'RIGHT';
  }

  onMoveSemi(event: JoystickEvent) {
    this.semiOutputData = event.data;
  }

  onMoveDynamic(event: JoystickEvent) {
    this.dynamicOutputData = event.data;
  }
}
