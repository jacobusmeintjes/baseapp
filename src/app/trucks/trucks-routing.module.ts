/**
 * Created by namita on 7/10/16.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TrucksComponent} from './trucks.component';
import { TrucksListComponent } from './trucks-list/trucks-list.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: TrucksComponent ,
                 children: [
                     {
                         path: '',
                         component: TrucksListComponent
                     },
                     {
                         path: ':id',
                         component: TruckDetailComponent,
                     }
                 ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TrucksRoutingModule {
}