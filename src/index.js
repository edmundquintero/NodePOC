import 'reflect-metadata';
import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


const AppComponent = Component({
  selector: 'dog-app',
  template: '<h1>Hello Angular 2!</h1>'
});

const CoreModule = NgModule({
  imports:[],
  providers: [],
  declarations:[
    AppComponent
  ],
  // bootstrap:[
  //   AppComponent
  // ]
}).Class({
  constructor: () => {}
});


document.addEventListener('DOMContentLoaded', () => platformBrowserDynamic().bootstrapModule(CoreModule) );