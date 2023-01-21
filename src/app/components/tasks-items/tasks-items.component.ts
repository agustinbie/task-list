import { Component, Input } from '@angular/core';
import {Task} from '../../Task';
import {TASKS} from '../../mock-taskk';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent {
  @Input() task: Task = TASKS[0]

}
