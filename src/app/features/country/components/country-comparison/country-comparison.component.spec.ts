import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryComparisonComponent } from './country-comparison.component';

describe('CountryComparisonComponent', () => {
  let component: CountryComparisonComponent;
  let fixture: ComponentFixture<CountryComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
