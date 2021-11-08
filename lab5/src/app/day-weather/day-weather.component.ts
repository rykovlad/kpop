import { Component, Input, OnInit } from '@angular/core';
import { ConsolidatedWeather } from '../app.service';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent implements OnInit {

  @Input()
  weather: ConsolidatedWeather

  constructor() { }

  ngOnInit(): void {
  }

}
