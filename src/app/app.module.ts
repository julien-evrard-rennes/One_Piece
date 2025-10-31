import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { MainComponent } from './template/main/main.component';
import { FooterComponent } from './template/footer/footer.component';
import { AccueilComponent } from './template/accueil/accueil.component';
import { ListePersonnagesComponent } from './template/liste-personnages/liste-personnages.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AccueilComponent,
    ListePersonnagesComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
