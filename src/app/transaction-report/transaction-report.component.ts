import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromSelector from './store/transaction-report.selector';
import * as fromActions from './store/transaction-report.actions';
import {Report, Search} from './models';
import {MatSnackBar} from '@angular/material';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  providers: [
    DatePipe
  ]
})
export class TransactionReportComponent implements OnInit {

  transactionReportSearchForm: FormGroup = new FormGroup({
    fromDate: new FormControl('', Validators.required),
    toDate: new FormControl('', Validators.required),
    merchant: new FormControl('', null),
    acquirer​​: new FormControl('', null),
  });

  search: Search;
  reports: Report[];

  constructor(
    private store: Store<fromSelector.TransactionReportAppState>,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe
  ) {
  }

  public ngOnInit() {

    const report$ = this.store.select(fromSelector.transactionReportSelector).subscribe((reports: Report[]) => {
      this.reports = reports;
    });

    const error$ = this.store.select(fromSelector.transactionReportErrorSelector).subscribe((message: string) => {
      if (message != null && message !== '') {
        this.snackBar.open(message, 'OK', {
          duration: 3000
        });
      }
    });

  }

  onSubmit() {
    const controls = this.transactionReportSearchForm.controls;
    if (this.transactionReportSearchForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.search = {...this.transactionReportSearchForm.value};
    this.search.fromDate = this.datePipe.transform(this.search.fromDate, environment.dateFormat);
    this.search.toDate = this.datePipe.transform(this.search.toDate, environment.dateFormat);
    this.store.dispatch(new fromActions.TransactionReport(this.search));

  }

  trackByFn(index, entity) {
    return entity.count;
  }


}



