import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {AbstractApiService} from './abstract-api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarService extends AbstractApiService{
  readonly CALENDAR_API: string = environment.calendarApi;
  readonly API_KEY = 'AIzaSyB3jdF-TIVyarrq1tdSA1pVutygdSJA9TU';
  readonly API_URL: string = this.CALENDAR_API + this.API_KEY;

  public getSchedule(): Observable<CalendarResponse<ScheduleItem>> {
    return this.httpC.get<CalendarResponse<ScheduleItem>>(this.API_URL).pipe(map(resp =>{
      resp.items.forEach(i => {

        i.start = new Date((i.start as any).dateTime);
      });
      return resp;
    }));
  }

}

export interface CalendarResponse<T> {
  items: T[];
}

export interface ScheduleItem{
    summary: string;
    description: string;
    start: Date;
}



