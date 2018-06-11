import { Component } from '@angular/core';
import { DaysService } from './days.service';
import { Day } from './day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedDay: Day;

  days: Day[];

  constructor(private daysService: DaysService) {}
  
  ngOnInit() {
    this.daysService.getDays().subscribe((data) => {
      this.days = data;
    },(err) => {
      this.days = [{id: 1, name: 'No dates available', short: 'Day', number: '00'}]
    });
  }

  selectOrUnselectDay(id: number) {

    if (this.selectedDay && this.selectedDay.id == id) {
      return this.selectedDay = null;
    }

    this.daysService.getDay(id).subscribe((data) => {
      this.selectedDay = data;
    });

  }

}
