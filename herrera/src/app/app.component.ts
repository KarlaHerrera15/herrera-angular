import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent2Component } from './app-component2/app-component2.component';
import { AppComponent3Component } from './app-component3/app-component3.component';
import { AppComponent1Component } from './app-component1/app-component1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppComponent1Component, AppComponent2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-gitpod';
  karla = 'app'
}
