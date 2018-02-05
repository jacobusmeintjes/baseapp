import { BondState, bondInitialState } from './bond.state';
import { BondAction, BondActions, LoadSuccessAction } from './bond.actions';


export function bondReducer(state = bondInitialState,
    action: BondAction): BondState {

    switch (action.type) {
        case BondActions.LOAD: {
            return Object.assign({}, state, {
                isCalculated: false,
                isCalculating: false,
                isLoading: true,
                hasError: false,
                error: null
            });
        }
        case BondActions.LOAD_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                isCalculated: false,
                isCalculating: false,
                hasError: false,
                isLoaded: true,
                error: null
            });
        }
        case BondActions.CALCULATE: {
            return Object.assign({}, state, {
                isCalculating: true,
                isCalculated: false
            });
        }
        case BondActions.CALCULATE_SUCCESS: {
            return Object.assign({}, state, {
                isCalculating: false,
                isCalculated: true
            });
        }

        default: {
                return state;
        }
    }
}
