import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component'
import { AppCarouselComponent } from './component/app-carousel/appcarousel.component'
import { NewsCarouselComponent } from './component/news-carousel/newscarousel.component'
import { SiteFooterComponent } from './component/site-footer/sitefooter.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,NavbarComponent,AppCarouselComponent,NewsCarouselComponent,SiteFooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
