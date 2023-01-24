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

}
