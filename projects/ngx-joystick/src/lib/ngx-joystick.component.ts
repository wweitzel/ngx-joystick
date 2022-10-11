import { Component, OnInit, Output, EventEmitter, Input, ElementRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import * as nipplejs from 'nipplejs';
import { fromEvent, Subscription } from 'rxjs';

export interface JoystickEvent {
  event: nipplejs.EventData;
  data: nipplejs.JoystickOutputData;
}

@Component({
  selector: 'ngx-joystick',
  template: `
  <div #joystickContainer style="width: 100%; height: 100%" id="static"></div>
  `,
  styles: [],
})
export class NgxJoystickComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('joystickContainer') joystickContainer!: ElementRef;

  @Input() options!: nipplejs.JoystickManagerOptions;

  @Output() move = new EventEmitter<JoystickEvent>();
  @Output() start = new EventEmitter<JoystickEvent>();
  @Output() end = new EventEmitter<JoystickEvent>();
  @Output() dir = new EventEmitter<JoystickEvent>();
  @Output() dirUp = new EventEmitter<JoystickEvent>();
  @Output() dirDown = new EventEmitter<JoystickEvent>();
  @Output() dirLeft = new EventEmitter<JoystickEvent>();
  @Output() dirRight = new EventEmitter<JoystickEvent>();
  @Output() plain = new EventEmitter<JoystickEvent>();
  @Output() plainUp = new EventEmitter<JoystickEvent>();
  @Output() plainDown = new EventEmitter<JoystickEvent>();
  @Output() plainLeft = new EventEmitter<JoystickEvent>();
  @Output() plainRight = new EventEmitter<JoystickEvent>();

  manager!: nipplejs.JoystickManager;

  private interval!: number;
  private touchMoveSubscription: Subscription = new Subscription();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.interval = window.setInterval(() => {
      if (
        this.joystickContainer &&
        this.joystickContainer.nativeElement.clientWidth &&
        this.joystickContainer.nativeElement.clientHeight
      ) {
        if (!this.options) {
            this.options = this.getDefaultOptions();
        } else {
            this.options.zone = this.el.nativeElement;
        }
        this.manager = nipplejs.create(this.options);
        this.setupEvents();

        window.clearInterval(this.interval);
      }
    }, 100);
  }

  ngOnDestroy() {
    window.clearInterval(this.interval);
    this.manager.destroy();
    this.touchMoveSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.touchMoveSubscription = fromEvent(this.el.nativeElement, 'touchmove').subscribe((event: any) => {
      event.preventDefault();
      event.stopPropagation();
    });
  }

  private getDefaultOptions(): nipplejs.JoystickManagerOptions {
    const options: nipplejs.JoystickManagerOptions = {
      zone: this.el.nativeElement,
      mode: 'static',
      position: { left: '50%', top: '50%' },
      color: 'blue'
    };
    return options;
  }

  private emitEvent(event: any, emitter: EventEmitter<any>) {
    const joystickEvent: JoystickEvent = { event: event.event, data: event.data };
    emitter.emit(joystickEvent);
  }

  private setupEvents() {
    this.manager.on('move', (event, data) => { this.emitEvent({event, data}, this.move); });
    this.manager.on('start', (event, data) => { this.emitEvent({event, data}, this.start); });
    this.manager.on('end', (event, data) => { this.emitEvent({event, data}, this.end); });
    this.manager.on('dir', (event, data) => { this.emitEvent({event, data}, this.dir); });
    this.manager.on('dir:up', (event, data) => { this.emitEvent({event, data}, this.dirUp); });
    this.manager.on('dir:down', (event, data) => { this.emitEvent({event, data}, this.dirDown); });
    this.manager.on('dir:left', (event, data) => { this.emitEvent({event, data}, this.dirLeft); });
    this.manager.on('dir:right', (event, data) => { this.emitEvent({event, data}, this.dirRight); });
    this.manager.on('plain', (event, data) => { this.emitEvent({event, data}, this.plain); });
    this.manager.on('plain:up', (event, data) => { this.emitEvent({event, data}, this.plainUp); });
    this.manager.on('plain:down', (event, data) => { this.emitEvent({event, data}, this.plainDown); });
    this.manager.on('plain:left', (event, data) => { this.emitEvent({event, data}, this.plainLeft); });
    this.manager.on('plain:right', (event, data) => { this.emitEvent({event, data}, this.plainRight); });
  }

}
