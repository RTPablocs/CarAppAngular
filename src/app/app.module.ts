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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopComponent } from './pages/shop/shop.component';
import { SearchPipe } from './pipes/search.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { FilteringPipe } from './pipes/filtering.pipe';
import { FiltersComponent } from './components/filters/filters.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AvatarsComponent } from './components/avatars/avatars.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';
import {CartDataService} from './services/cart-data.service';

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
    FilteringPipe,
    FiltersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AvatarsComponent,
    DetailsComponent,
    CartComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        HttpClientModule
    ],
  providers: [CartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
