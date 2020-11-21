import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../../shared/shared.module';

import { CountryComponent } from './components/country/country.component';
import { MenuComponent } from './components/menu/menu.component';
import { DataComponent } from './components/data/data.component';

import { CountryPageComponent } from './pages/country/country-page.component';
import { ComparisonPageComponent } from './pages/comparison/comparison-page.component';

@NgModule({
  imports: [SharedModule, MatSelectModule, NgxChartsModule],
  declarations: [CountryComponent, CountryPageComponent, ComparisonPageComponent, MenuComponent, DataComponent],
})
export class CountryModule {}
