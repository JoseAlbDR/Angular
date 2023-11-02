import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  public country?: Country;
  public isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // Cancel previous subscription and activate new subscription
        // each time that activateRoute.params changes
        switchMap(({ id }) => {
          this.isLoading = true;
          return this.countriesService.searchBy('alpha', id);
        })
        // Changes data format or estructure
        // map((countries) => {
        //   return countries;
        // })
      )
      .subscribe((countries) => {
        if (countries.length === 0) this.router.navigateByUrl('');
        this.country = countries[0];
        this.isLoading = false;
      });
  }

  public getObjectKeys(obj: { [key: string]: any }): string[] {
    return Object.keys(obj);
  }

  public getObjectValues(obj: { [key: string]: string }) {
    return Object.values(obj);
  }
}
