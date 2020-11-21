import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryPageComponent } from './features/country/country-page.component';
import { CountryComparisonPageComponent } from './features/country/components/country-comparison-page/country-comparison-page.component';
import { WorldComponent } from './features/world/world.component';

const routes: Routes = [
  {
    path: '',
    component: WorldComponent,
  },
  {
    path: 'country/:country',
    component: CountryPageComponent,
  },
  {
    path: 'comparison/:country/:countryTwo',
    component: CountryComparisonPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
