import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSelector from './store/transaction-list.selector';
import * as fromActions from './store/transaction-list.actions';
import {List, ListResponse, Operation, PaymentMethod, Search, Status} from './models';
import {MatSnackBar} from '@angular/material';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  providers: [
    DatePipe
  ]
})
export class TransactionListComponent implements OnInit {

  transactionListSearchForm: FormGroup = new FormGroup({
    fromDate: new FormControl('', Validators.required),
    toDate: new FormControl('', Validators.required),
    status: new FormControl(null),
    operation: new FormControl(null),
    merchantId: new FormControl(null),
    acquirerId: new FormControl(null),
    paymentMethod: new FormControl(null),
    errorCode: new FormControl(null),
    filterField: new FormControl(null),
    filterValue: new FormControl(null),
    page: new FormControl(0),
  });

  search: Search;
  list: List[] = [];
  prevPageUrl: string;
  nextPageUrl: string;

  public statuses = Object.keys(Status).filter(x => isNaN(+x));
  public operations = Object.keys(Operation).filter(x => isNaN(+x));
  public paymentMethods = Object.keys(PaymentMethod).filter(x => isNaN(+x));
  constructor(
    private store: Store<fromSelector.TransactionListAppState>,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe,
  ) {
  }

  public ngOnInit() {

    const list$ = this.store.select(fromSelector.transactionListSelector).subscribe((listResponse: ListResponse) => {
     if (listResponse) {
       this.list = listResponse.data;
       this.prevPageUrl = listResponse.prev_page_url;
       this.nextPageUrl = listResponse.next_page_url;
     }
    });

    const error$ = this.store.select(fromSelector.transactionListErrorSelector).subscribe((message: string) => {
      if (message != null && message !== '') {
        this.snackBar.open(message, 'OK', {
          duration: 3000
        });
      }
    });

  }

  onSubmit() {
    const controls = this.transactionListSearchForm.controls;
    if (this.transactionListSearchForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.search = {...this.transactionListSearchForm.value};
    this.search.fromDate = this.datePipe.transform(this.search.fromDate, environment.dateFormat);
    this.search.toDate = this.datePipe.transform(this.search.toDate, environment.dateFormat);
    this.store.dispatch(new fromActions.TransactionList(this.search));
  }

  trackByFn(index, entity) {
    return entity.count;
  }

  previous() {
    if (this.prevPageUrl != null) {
      this.search = {...this.search, page: (this.search.page - 1)};
      this.store.dispatch(new fromActions.TransactionList(this.search));
    }
  }

  next() {
    if (this.nextPageUrl != null) {
      this.search =  {...this.search, page : (this.search.page + 1)};
      this.store.dispatch(new fromActions.TransactionList(this.search));
    }
  }

}



