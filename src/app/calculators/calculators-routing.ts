/**
 * Created by namita on 7/10/16.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { BondComponent } from './bond/bond.component';



@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'bond',
                component: BondComponent// ,
                //  children: [
                //      {
                //          path: '',
                //          component: TrucksListComponent
                //      },
                //      {
                //          path: ':id',
                //          component: TruckDetailComponent,
                //      }
                //  ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CalculatorRoutingModule {
}
