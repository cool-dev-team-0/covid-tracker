import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../../shared/shared.module';

import { CountryComponent } from './components/country/country.component';
import { MenuComponent } from './components/menu/menu.component';
import { DataComponent } from './components/data/data.component';
import { CountryPageComponent } from './country-page.component';
import { CountryComparisonComponent } from './components/country-comparison/country-comparison.component';
import { CountryComparisonPageComponent } from './components/country-comparison-page/country-comparison-page.component';


@NgModule({
  imports: [SharedModule, MatSelectModule, NgxChartsModule],
  declarations: [CountryComponent, CountryPageComponent, CountryComparisonComponent, CountryComparisonPageComponent, MenuComponent, DataComponent],
  exports: [MenuComponent, DataComponent, CountryPageComponent, CountryComparisonComponent, CountryComparisonPageComponent],
})
export class CountryPageModule {}
