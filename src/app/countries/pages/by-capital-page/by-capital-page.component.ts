import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesServices) {}

  searchByCapital(term: any): void {
    this.countriesServices
      .searchCapital(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
