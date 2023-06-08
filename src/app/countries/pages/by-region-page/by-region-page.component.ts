import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesServices) {}

  searchByRegion(term: string): void {
    this.countriesServices
      .searchRegion(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
