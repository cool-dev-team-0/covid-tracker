import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-comparison-page',
  templateUrl: './country-comparison-page.component.html',
  styleUrls: ['./country-comparison-page.component.scss']
})
export class CountryComparisonPageComponent {
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}
  public readonly country$ = this.route.params.pipe(map(({ country }) => country as string));
  public readonly countryTwo$ = this.route.params.pipe(map(({ countryTwo }) => countryTwo as string));

  public switchCountry(country: string, countryTwo: string): void {
    this.router.navigate([`comparison/${country}/${countryTwo}`], { relativeTo: this.route });
  }

  public switchCountryTwo(countryTwo: string): void {
    this.router.navigate([`../${countryTwo}`], { relativeTo: this.route });
  }
}

