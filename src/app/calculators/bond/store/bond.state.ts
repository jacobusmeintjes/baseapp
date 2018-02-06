import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { BondCalculator } from '../model/BondCalculator';



export interface BondState extends EntityState<BondCalculator> {
    error: any;
    isCalculated: boolean;
    isCalculating: boolean;
    isLoaded: boolean;
}

export const bondAdapter: EntityAdapter<BondCalculator> = createEntityAdapter<BondCalculator>({

});

export const bondInitialState: BondState = bondAdapter.getInitialState({
  isLoaded: false,
  isCalculated: false,
  isCalculating: false,
  error: null
});

// export const selectedTaskId = (state: TaskState) => state.selectedTaskId;
 export const selectIsCalculated = (state: BondState) => state.isCalculated;
 export const selectIsCalculating = (state: BondState) => state.isCalculating;
 export const selectError = (state: BondState) => state.error;
