import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-comparison',
  templateUrl: './country-comparison.component.html',
  styleUrls: ['./country-comparison.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComparisonComponent implements OnInit {
  constructor() {}
  
  @Input()
  public country: Observable<string>;

  @Output()
  public countryChanged = new EventEmitter<string>();

  @Input()
  public countryTwo: Observable<string>;
  
  @Output()
  public countryTwoChanged = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public switchCountry(country: string): void {
    this.countryChanged.emit(country);
  }

  public switchCountryTwo(countryTwo: string): void {
    this.countryTwoChanged.emit(countryTwo);
  }
}
