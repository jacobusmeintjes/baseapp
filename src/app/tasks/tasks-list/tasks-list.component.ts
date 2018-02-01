/**
 * Created by NamitaMalik on 9/27/2016.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'tasks-list.component.html',
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
