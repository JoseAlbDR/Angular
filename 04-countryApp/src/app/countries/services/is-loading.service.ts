import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsLoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  private isLoadingSubjectImage = new BehaviorSubject<boolean>(false);

  isLoading$ = this.isLoadingSubject.asObservable();
  isLoadingImage$ = this.isLoadingSubjectImage.asObservable();

  setIsLoadingCountry(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  setIsLoadingSearch(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  setIsLoadingImage(isLoading: boolean) {
    this.isLoadingSubjectImage.next(isLoading);
  }
}
