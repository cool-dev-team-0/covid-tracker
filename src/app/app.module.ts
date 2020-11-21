import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CountryPageModule } from './features/country/country-page.module';
import { WorldModule } from './features/world/world.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CountryPageModule,
    WorldModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
