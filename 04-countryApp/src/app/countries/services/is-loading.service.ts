import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsLoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  setIsLoadingCountry(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  setIsLoadingSearch(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }
}
