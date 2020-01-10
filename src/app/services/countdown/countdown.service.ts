import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { takeWhile, map, startWith, takeUntil } from 'rxjs/operators';

export interface IInterval {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  constructor() { }

  getCountDown(timeToGo: number): Observable<IInterval> {
    return interval(1000).pipe(
      startWith(0),
      map(
        _ =>  this.getIntervalTime(timeToGo, Date.now())
      ),
      takeWhile(_ => !this.isComplete(timeToGo, Date.now())),
    );
  }

  isComplete(dateA: number, dateB: number): boolean {
    return (dateA - dateB) <= 0;
  }

  private getIntervalTime(dateA: number, dateB: number): IInterval {
    const intervalTime: number = Math.floor((dateA - dateB) / 1000);
    return this.getTime(intervalTime);
  }

  private getTime(time: number): IInterval{
      const intervalTime: IInterval = {days : 0, hours : 0, minutes : 0, seconds: 0};
      intervalTime.days = Math.floor(time / 86400);
      time -= intervalTime.days * 86400;
      intervalTime.hours = Math.floor(time / 3600) % 24;
      time -= intervalTime.hours * 3600;
      intervalTime.minutes = Math.floor(time / 60) % 60;
      time -= intervalTime.minutes * 60;
      intervalTime.seconds = time % 60;
      return intervalTime;
  }
}
