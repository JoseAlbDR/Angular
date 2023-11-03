import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { IsLoadingService } from '../../services/is-loading.service';

@Component({
  selector: 'countries-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
})
export class CountryInfoComponent implements OnInit {
  constructor(private isLoadingService: IsLoadingService) {}

  @Input()
  public country?: Country;

  ngOnInit(): void {
    if (!this.country) return;
  }

  isLoading$ = this.isLoadingService.isLoading$;
}
