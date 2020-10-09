import { Component, OnInit } from '@angular/core';
import {CalendarService, ScheduleItem, CalendarResponse} from '../../core/services/calendar.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public schedule: ScheduleItem[];

  constructor(private calendarSvc: CalendarService) { }

  ngOnInit(): void {
    this.calendarSvc.getSchedule().subscribe((response: CalendarResponse<ScheduleItem>) => {
      this.schedule = response.items;
    });

  }

}
