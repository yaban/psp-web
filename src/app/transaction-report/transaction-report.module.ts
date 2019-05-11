import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from '../material';
import {TransactionReportComponent} from './transaction-report.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TransactionSearchReducer } from './store/transaction-report.reducers';
import { TransactionReportEffect } from './store/transaction-report.effect';
import {TransactionReportService } from './transaction-report.service';

export const COMPONENTS = [
  TransactionReportComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('transactionReport', {
      transactionReportState: TransactionSearchReducer
    }),
    EffectsModule.forFeature(
      [TransactionReportEffect]
    ),
  ],
  declarations: COMPONENTS,
  entryComponents: [],
  providers: [
    TransactionReportService
  ]

})
export class TransactionReportModule {}
