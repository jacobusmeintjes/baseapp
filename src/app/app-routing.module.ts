import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'tasks', loadChildren: 'app/tasks/tasks.module#TasksModule'},
  {path: 'clients', loadChildren: 'app/clients/client.module#ClientModule'},
    // otherwise redirect to base
    { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
