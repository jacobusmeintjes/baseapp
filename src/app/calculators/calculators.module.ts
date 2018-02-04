import { NgModule } from '@angular/core';
import { BondComponent } from './bond/bond.component';
import { CalculatorRoutingModule } from './calculators-routing';
import { BondStoreModule } from './bond/store/bond-store.module';
import { BondService } from './bond/services/bond.service';




@NgModule({
  declarations: [BondComponent],
  imports: [
      CalculatorRoutingModule,
      BondStoreModule
  ],
  exports: [
  ],
  providers: [
    BondService
  ]
})
export class CalculatorsModule { }
