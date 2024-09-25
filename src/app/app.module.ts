import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxJoystickModule } from '../../projects/ngx-joystick/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJoystickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
