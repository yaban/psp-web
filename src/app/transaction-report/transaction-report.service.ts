import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Search} from './models';
import {Token} from '../auth/models';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class TransactionReportService {

    constructor(private http: HttpClient) { }

    getTransactionReport(search: Search): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this.http.post<Token>(environment.apiUrl + 'transactions/report', search, { headers } );
    }

}
