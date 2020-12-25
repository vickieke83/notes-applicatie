import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GebruikersComponent } from './pages/gebruikers/gebruikers.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //HttpClientModule,
    GebruikersComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
