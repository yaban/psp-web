import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundPageComponent} from './core/containers/not-found-page.component';
import {DashboardComponent} from './core/containers/dashboard.component';
import {TransactionReportComponent} from './transaction-report/transaction-report.component';
import {AuthGuard} from './auth/services';
import {TransactionListComponent} from './transaction-list/transaction-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transaction-report',
    component: TransactionReportComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transaction-list',
    component: TransactionListComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
