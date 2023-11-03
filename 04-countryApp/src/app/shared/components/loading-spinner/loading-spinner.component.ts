import { Component } from '@angular/core';

import { IsLoadingService } from 'src/app/countries/services/is-loading.service';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent {
  constructor(private isLoadingService: IsLoadingService) {}

  isLoading$ = this.isLoadingService.isLoading$;
}
