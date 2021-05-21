import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {FormsModule} from '@angular/forms';
import { ShopComponent } from './pages/shop/shop.component';
import { SearchPipe } from './pipes/search.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { FilteringPipe } from './pipes/filtering.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    SearchbarComponent,
    CategoriesComponent,
    ShopComponent,
    SearchPipe,
    CardsComponent,
    FilteringPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
