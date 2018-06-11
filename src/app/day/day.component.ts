import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day: Day;

  constructor() { }

  ngOnInit() {
  }

}
