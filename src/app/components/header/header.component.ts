import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = 'My Task List'

  toggleAddTask(){
    console.log("toggleAddTask!");//no funciona este console log en la consola de chrome, o al menos no me lo muestra
  }
}
