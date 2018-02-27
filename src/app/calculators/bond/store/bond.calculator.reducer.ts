import { ActionReducer, Action } from '@ngrx/store';
import * as bondcalculatoractions from './bond.calculator.actions';
import * as bondActions from './bond.calculator.actions';



export function reducer(state: bondcalculatoractions.BondCalculatorState = bondActions.bondCalculatorInitialState, action: any) {
    switch (action.type) {
        case bondcalculatoractions.CALCULATE_BOND:
            return action.payload;
        default:
            return state;
    }
}