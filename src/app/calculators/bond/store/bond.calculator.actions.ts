import { Action } from '@ngrx/store';
import { BondCalculator } from '../model/BondCalculator';

export const CALCULATE_BOND = '[Bond] Calculate';
export const CALCULATE_BOND_SUCCESS = '[Bond] Calculated Successfully';

export interface BondCalculatorState {
    bond: BondCalculator;
}

export const bondCalculatorInitialState: BondCalculatorState = {
    bond: null
};

export class BondCalculateAction implements Action {
    type = CALCULATE_BOND;

    constructor(public payload: BondCalculator) {}
}

export class BondCalculateSuccessAction implements Action {
    type = CALCULATE_BOND_SUCCESS;

    constructor(public payload: BondCalculator) {}
}
