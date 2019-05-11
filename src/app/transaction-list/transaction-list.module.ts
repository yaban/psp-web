import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from '../material';
import {TransactionListComponent} from './transaction-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TransactionListReducer } from './store/transaction-list.reducers';
import { TransactionListEffect } from './store/transaction-list.effect';
import {TransactionListService } from './transaction-list.service';

export const COMPONENTS = [
  TransactionListComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('transactionList', {
      transactionListState: TransactionListReducer
    }),
    EffectsModule.forFeature(
      [TransactionListEffect]
    ),
  ],
  declarations: COMPONENTS,
  entryComponents: [],
  providers: [
    TransactionListService
  ]

})
export class TransactionListModule {}
