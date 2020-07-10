# NgxJoystick

NgxJoystick is an angular wrapper around the nipplejs library. It is a component providing joystick functionality to your angular application.

## Demo

https://wweitzel.github.io/ngx-joystick/

---

## Dependencies

This library depends on nipple.js version 0.8.1.

Please run `npm install nipplejs@0.8.1` before running the demo. (Note it MUST be version 0.8.1)

---

## Installation
```
npm install nipplejs@0.8.1
npm install ngx-joystick
```
https://www.npmjs.com/package/ngx-joystick

---

## Building Locally

Clone the repo and run `npm install` in the root directory

Run `ng build ngx-joystick` to build the lib

Run `ng serve` and navigate to `localhost:4200`

---

## Example Usage

See `src/app/app.component` for usage.

---

## Demo Deployment Steps 
1) Build the application
```console
ng build -c production
``` 
2) Navigate to the `/dist` directory
2) Add `<base href="ngx-joystick">` to the `index.html`
3) Make a new file called `404.html` and copy the contents of `index.html` into it
4) Copy the contents of the `/dist` directory into the `/docs` directory
5) Commit/Push the new `/docs` directory to master branch
