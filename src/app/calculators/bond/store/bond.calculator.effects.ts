import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as bondActions from './bond.calculator.actions';
import { BondCalculatorService } from '../services/bond.service';

@Injectable()
export class BondCalculatorEffects {
    @Effect()
    calculate$: Observable<Action> = this.actions$
        .ofType(bondActions.CALCULATE_BOND)
        .switchMap((obj: any) =>
            this.bondCalculatorService
                .calculate(obj.payload)
                .map(data => new CurrenciesUpdatedAction(data))
        );

    constructor(
        private bondCalculatorService: BondCalculatorService,
        private actions$: Actions
    ) { }
}