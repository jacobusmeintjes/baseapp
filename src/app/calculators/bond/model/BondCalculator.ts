export class BondCalculator {
    InitialAmount: number;
    InterestRate: number;
    NumberOfYears: number;
    ExtraPayment: number;
    PaymentType: PaymentType;
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

    mapPaymentType(paymentType: string): PaymentType {
        switch (paymentType) {
            case PaymentType.weekly.toString():
                return PaymentType.weekly;
            default:
                return PaymentType.monthly;
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
}

export enum PaymentType {
    weekly, biweekly, monthly, quarterly, annually
}
