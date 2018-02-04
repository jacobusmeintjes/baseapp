import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BondStoreService } from './bond-store.service';
import { BondEffects } from './bond.effects';
import { bondReducer } from './bond.reducer';

// import TaskStoreModule in the TaskModule
@NgModule({
  imports: [
    StoreModule.forFeature('bond', bondReducer),
    EffectsModule.forFeature([BondEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [BondStoreService]
})
export class BondStoreModule {}
