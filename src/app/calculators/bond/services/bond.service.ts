import { Injectable } from '@angular/core';
import { BondCalculator } from '../model/BondCalculator';

@Injectable()
export class BondService {
    constructor() {}

    load() {
        return {
            InitialAmount: 0,
            InterestRate: 0,
            NumberOfYears: 0,
            ExtraPayment: 0,
            PaymentType: null,
            AdditionalPayments: [],
            Payments: []
        };
    }
}
