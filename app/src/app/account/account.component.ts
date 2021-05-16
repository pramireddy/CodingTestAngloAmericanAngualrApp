import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AccountTypeModel } from '../account-type/account-type.model';
import { AccountService, LoggerService } from '../core/services';
import { AccountType } from '../models/constants';
import { AccountGridDataModel } from './account-grid-data.model';
import { AccountModel } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  public accounts: AccountGridDataModel[];
  public filterAccounts: AccountGridDataModel[];
  subscription: Subscription;
  selectedAccountType: number | null;

  constructor(private accountService: AccountService, private logger: LoggerService, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.accountService.selectedAccountTypeChanges$
      .subscribe(
        selectedAccountType => {
          this.selectedAccountType = selectedAccountType
          if (this.accounts) {
            if (this.selectedAccountType === 0) {
              this.filterAccounts = this.accounts
            } else {
              this.filterAccounts = this.accounts.filter(item => item.typeId === this.selectedAccountType);
            }
          }
        }
      );
    this.loadAccounts();
  }
  private loadAccounts() {
    this.accountService.fetchAccounts()
      .subscribe(
        {
          next: (result: AccountModel[]) => {
            this.accounts = this.MapToAccountGridDataModel(result);
            this.filterAccounts = this.accounts;
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
    this.router.navigate(['/new-account']);
  }

  getAccountType(id: number) {
    return AccountType.get(id);
  }

  private MapToAccountGridDataModel(data: AccountModel[]): AccountGridDataModel[] {
    if (data == null) {
      return;
    }
    return data.map(x => ({
      firstName: x.firstName,
      lastName: x.lastName,
      typeId: x.typeId,
      accountType: AccountType.get(x.typeId),
      balance: x.balance,
      address: x.address
    }) as AccountGridDataModel)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
