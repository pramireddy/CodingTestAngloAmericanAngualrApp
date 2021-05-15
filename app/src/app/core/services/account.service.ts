import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountModel } from '../../account/account.model'
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private logger: LoggerService, private apiService: AppService) { }

  fetchAccounts(): Observable<AccountModel[]> {
    let renVal: Observable<AccountModel[]>;
    this.logger.trace(`accounts service:fetchAccounts`)
    renVal = this.apiService.get('https://localhost:44329/accounts');
    this.logger.trace(`accounts service:fetchAccounts`)
    return renVal;
  }
}
