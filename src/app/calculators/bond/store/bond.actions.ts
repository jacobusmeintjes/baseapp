import { NgRxAction } from '../../../store/ngrx-action';
import { BondCalculator } from '../model/BondCalculator';

export enum BondActions {
    LOAD = '[Bond] LOAD Requested',
    LOAD_SUCCESS = '[Bond] LOAD Success',
    CALCULATE = '[Bond] CALCULATE Requested',
    CALCULATE_SUCCESS = '[Bond] CALCULATE Success',
    ADD_ADDITIONAL_PAYMENT = '[Bond] ADD ADDITIONAL PAYMENT Requested',
    ADD_ADDITIONAL_PAYMENT_SUCCESS = '[Bond] ADD ADDITIONAL PAYMENT Success',
    REMOVE_ADDITIONAL_PAYMENT = '[Bond] REMOVE ADDITIONAL PAYMENT Requested',
    REMOVE_ADDITIONAL_PAYMENT_SUCCESS = '[Bond] REMOVE ADDITIONAL PAYMENT Success',
    ERROR = '[Bond] Error'
}


export class LoadAction extends NgRxAction<any> { type = BondActions.LOAD; }
export class LoadSuccessAction extends NgRxAction<BondCalculator> { type = BondActions.LOAD_SUCCESS; }

export class CalculateAction extends NgRxAction<any> { type = BondActions.CALCULATE; }
export class CalculateSuccessAction extends NgRxAction<BondCalculator> { type = BondActions.CALCULATE_SUCCESS; }

export class AddAdditionalPaymentAction extends NgRxAction<BondCalculator> { type = BondActions.ADD_ADDITIONAL_PAYMENT; }
export class AddAdditionalPaymentSuccessAction extends NgRxAction<BondCalculator> { type = BondActions.ADD_ADDITIONAL_PAYMENT_SUCCESS; }

export class RemoveAdditionalPaymentAction extends NgRxAction<{id}> { type = BondActions.REMOVE_ADDITIONAL_PAYMENT; }
export class RemoveAdditionalPaymentSuccessAction extends NgRxAction<BondCalculator> {
    type = BondActions.REMOVE_ADDITIONAL_PAYMENT_SUCCESS;
}

export class ErrorAction extends NgRxAction<any> { type = BondActions.ERROR; }

export type BondAction =
  LoadAction | LoadSuccessAction |
  CalculateAction | CalculateSuccessAction |
  AddAdditionalPaymentAction | AddAdditionalPaymentSuccessAction |
  RemoveAdditionalPaymentAction | RemoveAdditionalPaymentSuccessAction |
  ErrorAction;
