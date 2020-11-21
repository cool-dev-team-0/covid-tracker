import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent implements OnInit {
  constructor() {}

  @Input()
  public country: Observable<string>;

  @Output()
  public countryChanged = new EventEmitter<string>();

  ngOnInit(): void {}

  public switchCountry(country: string): void {
    this.countryChanged.emit(country);
  }
}
