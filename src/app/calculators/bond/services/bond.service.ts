import { Injectable } from '@angular/core';
import { BondCalculator, Payment } from '../model/BondCalculator';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BondService {
    constructor() {}

    load(): Observable<BondCalculator> {
        return Observable.of(new BondCalculator(0, 0, 0, 0, '0'));

        // return {
        //     InitialAmount: 0,
        //     InterestRate: 0,
        //     NumberOfYears: 0,
        //     ExtraPayment: 0,
        //     PaymentType: null,
        //     AdditionalPayments: [],
        //     Payments: []
        // };
    }

    calculate(bondCalculator: BondCalculator): Observable<any> {

        let local: number = bondCalculator.InitialAmount;

    for (let i = 0; i < bondCalculator.numberOfPremiums; i++) {

      let item = new PaymentDetailItem(i + 1, initialAmount, interestRate, payment, ratePeriod, extraPayment);

      this.PaymentItems.push(item);
      initialAmount = item.OutstandingAmount;

      this.TotalInterest += item.Interest;
      this.TotalRepayment += payment;

      if (item.OutstandingAmount <= 0) {
        break;
      }
    }

    this.BondedAmount = local;
  

        return Observable.of(bondCalculator);
    }
}
