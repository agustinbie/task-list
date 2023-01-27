import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http' //pasamos a usar el server db.json y dejamos de usar el mockk
import {Observable, of} from 'rxjs'
import {Task} from '../Task';
import {TASKS} from '../mock-taskk';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

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

 updateTaskReminder(task:Task): Observable<Task>{
  const url = `${this.apiUrl}/${task.id}`
  return this.http.put<Task>(url, task, httpOptions) //este httpOptions es para informarle al backend que lo que le estamos mandando es un json, como se importa mas arriba
 }

 addTask(task:Task): Observable<Task>{
  
  return this.http.post<Task>(this.apiUrl, task, httpOptions)
 }

}



// recordar correr npm run server en un terminal al igual que ng serve