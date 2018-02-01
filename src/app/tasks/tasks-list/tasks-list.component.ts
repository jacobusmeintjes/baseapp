/**
 * Created by NamitaMalik on 9/27/2016.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    template: `
    <div>
        <ul class="bubble">
            <li *ngFor="let task of tasks let i=index" (click)="onSelect(task)">
                <span>{{i+1}}.</span>
                <span>{{task.title}}</span>
            </li>
        </ul>
    </div>
    <table class="table table-hover table-striped table-bordered">
    <thead class="thead-dark">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let task of tasks let i=index">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button type="button" class="btn btn-primary btn-sm" (click)="onSelect(task)">Edit</button></td>
    </tr>    
  </tbody>
</table>
    `,
})

export class TasksListComponent {

    constructor(private router: Router) {
        console.log('Tasks called!!!!');
    }

    private tasks = [
        {id: '1', title: 'Code Cleanup'},
        {id: '2', title: 'Review Code'},
        {id: '3', title: 'Build to Prod'}
    ];
    private errorMessage: any = '';

    onSelect(task) {
        this.router.navigate(['/tasks', task.id]);
    }
}
