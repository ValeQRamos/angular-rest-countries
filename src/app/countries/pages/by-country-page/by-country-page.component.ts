import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesServices) {}

  searchByCountry(term: string): void {
    this.countriesServices
      .searchCountry(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
