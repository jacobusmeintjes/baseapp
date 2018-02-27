import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BondCalculator } from '../model/BondCalculator';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  calculation$: Observable<BondCalculator[]>;

  constructor() { }

    ngOnInit() {
      
    }
}
