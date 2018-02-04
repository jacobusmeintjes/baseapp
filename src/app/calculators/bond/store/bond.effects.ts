import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { BondService } from '../services/bond.service';

import * as bond from './bond.actions';

@Injectable()
export class BondEffects {
    constructor(private api: BondService, private actions$: Actions) {}

    @Effect()
    loadAction$ = this.actions$
        .ofType<bond.LoadAction>(bond.BondActions.LOAD)
        .map(action => action.payload)
        .switchMap(payload =>
            this.api
                .load()
                .map(res => new bond.LoadSuccessAction(res))
                .catch(error => this.handleError(error))
            );


    private handleError(error) {
        return Observable.of(new bond.ErrorAction(error));
        }
}
