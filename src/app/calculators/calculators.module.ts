import { NgModule } from '@angular/core';
import { BondComponent } from './bond/bond.component';
import { CalculatorRoutingModule } from './calculators-routing';
import { BondStoreModule } from './bond/store/bond-store.module';
import { BondService } from './bond/services/bond.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { SummaryComponent } from './bond/summary/summary.component';

@NgModule({
  declarations: [BondComponent, SummaryComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    BondStoreModule,
    FormsModule,
    SharedModule
  ],
  exports: [
  ],
  bootstrap: [],
  providers: [
    BondService
  ]
})
export class CalculatorsModule { }
