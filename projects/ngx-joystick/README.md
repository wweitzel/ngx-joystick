# NgxJoystick

NgxJoystick is an angular joystick component. It is a wrapper around the [nipplejs](https://yoannmoi.net/nipplejs/) library providing joystick functionality to your angular application.

## Demo

https://wweitzel.github.io/ngx-joystick/

---

## Installation
For Angular 16 projects
```
npm install ngx-joystick
```
For Angular 15 projects
```
npm install ngx-joystick@3.0.2
```
For Angular 14 projects
```
npm install ngx-joystick@2.0.1
```
For Angular 12 projects
```
npm install ngx-joystick@1.0.6
```
For Angular 11 projects
```
npm install ngx-joystick@1.0.3
```
For Angular 8 projects
```
npm install ngx-joystick@0.1.1
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