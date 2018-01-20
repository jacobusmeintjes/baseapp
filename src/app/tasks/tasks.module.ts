import { NgModule } from '@angular/core';
import {TasksComponent} from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [TasksComponent, TasksListComponent, TaskDetailComponent],
  imports: [
    TasksRoutingModule,
    CommonModule
  ],
  exports: [
  ]
})
export class TasksModule { }
