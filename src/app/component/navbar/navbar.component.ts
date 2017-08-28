import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
//   template: `<h1>Hello {{name}}</h1>`,
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  { name = 'Angular'; }