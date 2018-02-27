import { Injectable } from '@angular/core';
import { BondCalculator, Payment, PaymentTypes } from '../model/BondCalculator';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BondCalculatorService {
    constructor() { }

    load(): Observable<BondCalculator> {
        return Observable.of(new BondCalculator(0, 0, 0, 0, '0'));
    }


    calculate(bondCalculator: BondCalculator): Observable<BondCalculator> {
debugger;
        for(let i = 0; i < 1000000; i++){
            let b = i + i * (i - 1);
        }

        let local: number = bondCalculator.InitialAmount;

        const rateDividor = this.convertToNumberOfPayments(bondCalculator.PaymentType);
        const numberOfPayments = bondCalculator.NumberOfYears * rateDividor;

        const rate = bondCalculator.InterestRate / 100 / rateDividor;
        const nominator: number = bondCalculator.InitialAmount * rate;
        const denominator: number = 1 - (Math.pow((1 + rate), - numberOfPayments));
        const installment: number = (nominator / denominator);

        for (let i = 0; i < numberOfPayments; i++) {

            const interest = local * (bondCalculator.InterestRate / 100 / rateDividor);

            const payment = new Payment();
            payment.PaymentNumber = i + 1;
            payment.InitialAmount = local;
            payment.Interest = interest;
            payment.Installment = installment;
            payment.Amortization = installment - interest;
            payment.OutstandingAmount = local - payment.Amortization;

            bondCalculator.Payments.push(payment);

            local -= payment.Amortization;
        }

        const a = Observable.of(bondCalculator);

        console.log(a);
        return a;
    }

    convertToNumberOfPayments(paymentType: PaymentTypes): number {
        switch (paymentType) {
            case PaymentTypes.monthly:
                return 12;
            case PaymentTypes.weekly:
                return 52;
            case PaymentTypes.biweekly:
                return 26;
            case PaymentTypes.quarterly:
                return 4;
            case PaymentTypes.annually:
                return 1;
        }
    }
}
