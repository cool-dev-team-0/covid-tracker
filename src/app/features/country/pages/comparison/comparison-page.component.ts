import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss']
})
export class ComparisonPageComponent {
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}
  public readonly countries$ = this.route.params.pipe(map(({ country, countryTwo }) => [country, countryTwo] as string[]));


  public switchCountry(country: string, countryTwo: string): void {
    const depth = this.route.snapshot.params.countryTwo ? '../..' : '..';
    this.router.navigate([`${depth}/${country}/${countryTwo}`], { relativeTo: this.route });
  }
}

