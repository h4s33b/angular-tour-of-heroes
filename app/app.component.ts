import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav a.active {
    color: #039be5;
  }`]
})
export class AppComponent {
  title = 'Tour of Heroes';
}


/**
 * 
 * This is a main Component.
 * We have added Title and also navigation here.
 * RouterLink tells that which route the user will be redirected to when he clicks the button and in routerLinkActive we have added a 
 * class that should be applied when the tab is active.
 * 
 */