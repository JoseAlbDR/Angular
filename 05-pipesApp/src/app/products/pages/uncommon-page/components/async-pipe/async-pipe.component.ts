import { Component, OnInit } from '@angular/core';
import { Observable, from, interval, map, tap } from 'rxjs';

@Component({
  selector: 'uncommon-async-pipe',
  templateUrl: './async-pipe.component.html',
  styles: [],
})
export class AsyncPipeComponent implements OnInit {
  public myObservableTimer = interval(1000).pipe(tap((v) => v));

  public observableTime?: Observable<string>;

  ngOnInit() {
    this.observableTime = interval(1000).pipe(
      map(() => {
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        return `${hour < 10 ? '0' + hour : hour} : ${
          minutes < 10 ? '0' + minutes : minutes
        } : ${seconds < 10 ? '0' + seconds : seconds}`;
      })
    );
  }
}
