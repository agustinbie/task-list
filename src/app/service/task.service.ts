import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http' //pasamos a usar el server db.json y dejamos de usar el mockk
import {Observable, of} from 'rxjs'
import {Task} from '../Task';
import {TASKS} from '../mock-taskk';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor( private http:HttpClient) { }
  getTasks(): Observable<Task[]>{

    return this.http.get<Task[]>(this.apiUrl)
  }
 deleteTask(task:Task): Observable<Task>{
  const url = `${this.apiUrl}/${task.id}`
  return this.http.delete<Task>(url)
 }
}
