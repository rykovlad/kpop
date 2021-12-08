import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = 'http://jsonplaceholder.typicode.com/todos';

    constructor(private http: HttpClient) { }


    getTasks(): Observable<any>{
        return this.http.get<any[]>(this.apiUrl);
    }
}

export interface Task{
  userId: string;
  id: string;
  title: string;
  completed: string;
}
