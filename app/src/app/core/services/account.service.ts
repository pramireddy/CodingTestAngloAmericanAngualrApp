import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountModel } from '../../account/account.model'
import { AppService } from './app.service';
import { LoggerService } from './logger.service';
import { AccountTypeModel } from '../../account-type/account-type.model'
import { AccountRequest } from 'src/app/models/accountRequest';

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

  fetchAccountTypes(): Observable<AccountTypeModel[]> {
    let renVal: Observable<AccountTypeModel[]>;
    this.logger.trace(`accounts service:fetchAccountTypes`)
    renVal = this.apiService.get('https://localhost:44329/accounttype');
    this.logger.trace(`accounts service:fetchAccountTypes`)
    return renVal;
  }

  creatAccount(createAccountRequest: AccountRequest): Observable<any> {
    let renVal: Observable<any>;
    this.logger.trace(`--> creating new account(${createAccountRequest.firstName})`);
    renVal = this.apiService.post('https://localhost:44329/accounts', createAccountRequest);
    this.logger.trace(`--> new account created(${createAccountRequest.firstName})`);
    return renVal;
  }

}
