import { Component, OnInit } from '@angular/core';
import { AccountService, LoggerService } from '../core/services';
import { AccountType } from '../models/constants';
import { AccountGridDataModel } from './account-grid-data.model';
import { AccountModel } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  /* TODO:
  - Load Accounts from the REST Api
  - Display Accounts in the HTML Table
  - Filter Accounts based on the Account Type
   */

  constructor(private accountService: AccountService, private logger: LoggerService) {
  }

  // public accounts: AccountGridDataModel[];

  public accounts: AccountModel[];


  ngOnInit(): void {
    this.loadAccounts();
  }

  private loadAccounts() {
    this.accountService.fetchAccounts()
      .subscribe(
        {
          next: (result: AccountModel[]) => {
            this.accounts = result;
          },
          error: (error: any) => {
            this.logger.error("Failed to Load Accounts" + error);
          },
          complete: () => {
            this.logger.trace("Load Accounts succcess");
          }
        }
      );
  }

  openNewAccount(): void {
    // this.router.navigate(['/new-account']);
  }

  getAccountType(id:number){
    return AccountType.get(id);
  }
}
