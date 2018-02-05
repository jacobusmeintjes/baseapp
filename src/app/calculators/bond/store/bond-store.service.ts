import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { StoreService } from './../../../store/app-store.service';
import { AppState } from './../../../store/app.reducer';
import * as bond from './bond.actions';
import * as state from './bond.state';

@Injectable()
export class BondStoreService extends StoreService {
  private bondState = createFeatureSelector<state.BondState>('bond');

  private selectors = state.bondAdapter.getSelectors(this.bondState);


  private isCalculating = createSelector(this.bondState, state.selectIsCalculating);
  private error = createSelector(this.bondState, state.selectError);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchCreateAction(record: any) { }
  dispatchUpdateAction(record: any) { }
  dispatchRemoveAction({ id: any }) { }

  dispatchLoadAction() {
    this.dispatchAction(new bond.LoadAction());
  }

  dispatchCalculateAction(record: any) {
    this.dispatchAction(new bond.CalculateAction(record));
  }

  dispatchAddAdditionalPaymentAction(record: any) {
    this.dispatchAction(new bond.AddAdditionalPaymentAction(record));
  }

  dispatchRemoveAdditionalPaymentAction(id) {
    this.dispatchAction(new bond.RemoveAdditionalPaymentAction(id));
  }

  getCalculation() {
    return this.store.select(this.selectors.selectAll);
  }

  getIsCalculating() {
    return this.store.select(this.isCalculating);
  }

  getError() {
    return this.store.select(this.error);
  }
}
