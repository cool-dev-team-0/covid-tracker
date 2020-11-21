import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent {
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}
  public readonly country$ = this.route.params.pipe(map(({ country }) => country as string));

  public switchCountry(country: string): void {
    this.router.navigate([`../${country}`], { relativeTo: this.route });
  }
}
