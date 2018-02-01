import { NgModule } from '@angular/core';
import {TrucksComponent} from './trucks.component';
import { TrucksListComponent } from './trucks-list/trucks-list.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { TrucksRoutingModule } from './trucks-routing.module';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [TrucksComponent, TrucksListComponent, TruckDetailComponent],
  imports: [
    TrucksRoutingModule,
    CommonModule
  ],
  exports: [
  ]
})
export class TrucksModule { }
