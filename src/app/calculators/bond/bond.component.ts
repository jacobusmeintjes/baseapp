import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BondCalculator } from './model/BondCalculator';

@Component({
  selector: 'app-bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})
export class BondComponent implements OnInit {

  interestRate: number;
  numberOfPayments: number;
  extraPayment: number;
  repaymentRate: string;
  initialAmount: number;

  calculation$: Observable<BondCalculator[]>;
  isCalculated$: Observable<boolean>;
  isCalculating$: Observable<boolean>;
  error$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.initialAmount = 1200000;
    this.interestRate = 11;
    this.repaymentRate = 'Monthly';
    this.numberOfPayments = 20;
  }


  onCalculate() {
  }
}
