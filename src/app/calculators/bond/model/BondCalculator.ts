export interface BondCalculator {
    InitialAmount: number;
    InterestRate: number;
    NumberOfYears: number;
    ExtraPayment: number;
    PaymentType: PaymentType;
    AdditionalPayments: AdditionalPayment[];
    Payments: Payment[];
}

export interface AdditionalPayment {
    Amount: number;
    PaymentNumber: number;
    From: number;
}

export interface Payment {
    PaymentNumber: number;
    InitialAmount: number;
    Interest: number;
    Installment: number;
}

export enum PaymentType {
    weekly, biweekly, monthly, quarterly, annually
}
