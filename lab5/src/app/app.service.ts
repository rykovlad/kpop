import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, zip } from 'rxjs';
import { switchMap, tap, map } from "rxjs/operators"


@Injectable({
  providedIn: 'root',
})
export class AppService {
  
  private capitals = ["amsterdam", "berlin", "budapest", "kiev", "london", "minsk"]

  constructor(private http: HttpClient) { }

  getUser(capital: string): Observable<Result[]> {
    return this.http.get<Result[]>(`/search/?query=${capital}`).pipe(tap(console.dir.bind(console)));

  }

  getUsers(): Observable<Result[][]> {
    const listOfObser = this.capitals.map(capital => this.getUser(capital))
    return zip(...listOfObser)    
  }

  getWeather(woeid: number): Observable<Result>{
    return this.http.get<Result>(`/weather/${woeid}`)
  }

}

export interface Result
{
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  consolidated_weather: ConsolidatedWeather[]
}

export interface ConsolidatedWeather {
  id: any;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: Date;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}