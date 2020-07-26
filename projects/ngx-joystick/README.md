# NgxJoystick

NgxJoystick is an angular wrapper around the [nipplejs](https://yoannmoi.net/nipplejs/) library. It is a component providing joystick functionality to your angular application.

## Demo

https://wweitzel.github.io/ngx-joystick/

---

## Installation
```
npm install ngx-joystick
```
https://www.npmjs.com/package/ngx-joystick

---

## Example Usage

Import `NgxJoystickModule` in your module. For example,
```typescript
import { NgxJoystickModule } from 'ngx-joystick';  <--- Added

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJoystickModule <--- Added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then see `src/app` files for usage. Make sure to look at the css as well.