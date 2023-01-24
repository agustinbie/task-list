import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Task} from '../../Task';
import {TASKS} from '../../mock-taskk';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent {
  @Input() task: Task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  
  faTimes=faTimes;

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

}
