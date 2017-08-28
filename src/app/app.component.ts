import { Component } from '@angular/core';
import { NavbarComponent } from './component/navbar/navbar.component'
import { AppCarouselComponent } from './component/app-carousel/appcarousel.component'
import { SiteFooterComponent } from './component/site-footer/sitefooter.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { name = 'Angular'; }
