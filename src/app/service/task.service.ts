import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {Task} from '../Task';
import {TASKS} from '../mock-taskk';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks 
  }
  constructor() { }
}
