import { BondState, bondInitialState } from './bond.state';
import { BondAction, BondActions } from './bond.actions';


export function bondReducer(state = bondInitialState,
    action: BondAction): BondState {

    switch (action.type) {
        case BondActions.LOAD: {
            return Object.assign({}, state, {
                isCalculated: false,
                isCalculating: false,
                hasError: false,
                error: null
            });
        }

        default: {
                return state;
        }
    }
}
