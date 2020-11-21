import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComparisonPageComponent, CountryPageComponent } from './features/country';
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
    path: 'comparison',
    children: [
      {
        path: ':country',
        component: ComparisonPageComponent,
      },
      {
        path: ':country/:countryTwo',
        component: ComparisonPageComponent,
      },
    ],
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
