import { FeatureModule } from './feature/feature.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './myComponents/login/login.component';
import { HomeComponent } from './myComponents/home/home.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { MovieComponent } from './myComponents/movie/movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
