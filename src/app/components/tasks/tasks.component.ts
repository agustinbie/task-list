import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  ngOnInit(): void {
    //like promise
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks));
  }
  tasks: Task[] = [];

  constructor(  
    private taskService: TaskService
  ) {}

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>[this.tasks = this.tasks.filter((t) => t.id !== task.id)])
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    //console.log(task.reminder)  usa el console log para ir probando a ver si funciona 
    //console.log("task!!")
    this.taskService. updateTaskReminder(task).subscribe(); //con eso actualizas la base de datos de true a false
  }

}
