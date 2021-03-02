import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ButtonComponent } from './button/button.component';
import { HrtagComponent } from './hrtag/hrtag.component';
import { Home1Component } from './home1/home1.component';
import { TrendingsComponent } from './trendings/trendings.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    SearchComponent,
    MenuComponent,
    HomeScreenComponent,
    ButtonComponent,
    HrtagComponent,
    Home1Component,
    TrendingsComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
