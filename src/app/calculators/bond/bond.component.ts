import { Component, OnInit, Input, Output } from '@angular/core';
import { BondStoreService } from './store/bond-store.service';
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
  isCalculating$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private bondStoreService: BondStoreService) { }

  ngOnInit() {
    this.initialAmount = 1200000;
    this.interestRate = 11;
    this.repaymentRate = 'Monthly';
    this.numberOfPayments = 20;


    this.bondStoreService.dispatchLoadAction();
    this.calculation$ = this.bondStoreService.getCalculation();
    this.isCalculating$ = this.bondStoreService.getIsCalculating();
    this.error$ = this.bondStoreService.getError();
  }


  onCalculate() {
    this.bondStoreService.dispatchCalculateAction(
      new BondCalculator(this.initialAmount, this.interestRate, this.numberOfPayments, 0, this.repaymentRate));
  }
}
