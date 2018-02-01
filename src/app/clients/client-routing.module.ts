/**
 * Created by namita on 7/10/16.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ClientComponent} from './client.component';
import { ClientListComponent } from './client-list/client-list.component';



@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ClientComponent ,
                  children: [
                      {
                          path: '',
                          component: ClientListComponent
                      }//,
                //      {
                //          path: ':id',
                //          component: TaskDetailComponent,
                //      }
                  ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ClientRoutingModule {
}