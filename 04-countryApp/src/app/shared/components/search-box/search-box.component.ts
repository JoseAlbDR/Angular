import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { IsLoadingService } from 'src/app/countries/services/is-loading.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  constructor(private isLoadingService: IsLoadingService) {}

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @ViewChild('queryInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue?: string;

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitQuery(value: string): void {
    if (value === '') return;

    this.onSearch.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  isLoading$ = this.isLoadingService.isLoading$;
}
