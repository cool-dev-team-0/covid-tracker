import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryComparisonPageComponent } from './country-comparison-page.component';

describe('CountryComparisonPageComponent', () => {
  let component: CountryComparisonPageComponent;
  let fixture: ComponentFixture<CountryComparisonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryComparisonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComparisonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
