export class BondCalculator {
    InitialAmount: number;
    InterestRate: number;
    NumberOfYears: number;
    ExtraPayment: number;
    PaymentType: PaymentTypes;
    AdditionalPayments: AdditionalPayment[];
    Payments: Payment[];

    constructor(initialAmount: number, interestRate: number, numberOfYear: number,
                extraPayment: number, paymentType: string) {
        this.InitialAmount = initialAmount;
        this.InterestRate = interestRate;
        this.NumberOfYears = numberOfYear;
        this.ExtraPayment = extraPayment;
        this.PaymentType = this.mapPaymentType(paymentType);
        this.AdditionalPayments = [];
        this.Payments = [];
    }

    mapPaymentType(paymentType: string): PaymentTypes {
        switch (paymentType.toLowerCase()) {
            case PaymentTypes.weekly.toString():
                return PaymentTypes.weekly;
            case PaymentTypes.biweekly.toString():
                return PaymentTypes.biweekly;
            case PaymentTypes.quarterly.toString():
                return PaymentTypes.quarterly;
            case PaymentTypes.annually.toString():
                return PaymentTypes.annually;
            default:
                return PaymentTypes.monthly;
        }
    }
}

export class AdditionalPayment {
    Amount: number;
    PaymentNumber: number;
    From: number;
}

export class Payment {
    PaymentNumber: number;
    InitialAmount: number;
    Interest: number;
    Installment: number;
    Amortization: number;
    OutstandingAmount: number;
}

export enum PaymentTypes {
    weekly = 'weekly', biweekly = 'biweekly', monthly = 'monthly', quarterly = 'quarterly', annually = 'annually'
}
