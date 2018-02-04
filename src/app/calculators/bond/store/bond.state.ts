import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { BondCalculator } from '../model/BondCalculator';



export interface BondState extends EntityState<BondCalculator> {
    error: any;
    isCalculated: boolean;
    isCalculating: boolean;
}

export const bondAdapter: EntityAdapter<BondCalculator> = createEntityAdapter<BondCalculator>({

});

export const bondInitialState: BondState = bondAdapter.getInitialState({
  isCalculated: false,
  isCalculating: false,
  error: null
});

// export const selectedTaskId = (state: TaskState) => state.selectedTaskId;
 export const selectIsCalculating = (state: BondState) => state.isCalculating;
 export const selectError = (state: BondState) => state.error;
