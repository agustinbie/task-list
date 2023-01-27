import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'//importamos el modulo para poder acceder desde el componente
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemsComponent } from './components/tasks-items/tasks-items.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';//importamos una fuente a traves de ng add en consola, link en favoritos
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes:Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent} //para ir a la ruta hay que agregar /about en el link en chrome.. el header sigue apareciendo porque está por fuera del router outlet en el template del app component. htlm
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemsComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent, 
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
