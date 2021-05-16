import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AccountService } from '../core/services/account.service';
import { LoggerService } from '../core/services/logger.service';
import { AccountTypeModel } from './account-type.model';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html'
})
export class AccountTypeComponent implements OnInit {

  /* TODO:
  - Load Accounts Types from the REST Api
  - Observable should be used to notify the account.component about changes in the selected Type
   */

  subscription: Subscription;
  selectedAccountType: AccountTypeModel | null;

  constructor(private accountService: AccountService, private logger: LoggerService) {
  }

  public accountTypes: AccountTypeModel[];

  ngOnInit(): void {
    this.subscription = this.accountService.selectedAccountTypeChanges$
      .subscribe(selectedAccountType => this.selectedAccountType = selectedAccountType)
    this.loadAccountTypes();
  }

  filterForAccountType(filterVal: number) {
    if (Number(filterVal) !== 0) {
      var selectedAccountType = this.accountTypes.filter(x => x.id === Number(filterVal))[0];
      this.accountService.changeSelectedAccountType(selectedAccountType);

      console.log(selectedAccountType);
    }
  }

  private loadAccountTypes() {
    this.accountService.fetchAccountTypes()
      .subscribe(
        {
          next: (result: AccountTypeModel[]) => {
            this.accountTypes = result;
          },
          error: (error: any) => {
            this.logger.error("Failed to Load Account Types" + error);
          },
          complete: () => {
            this.logger.trace("Load Account Types succcess");
          }
        }
      );
  }

}
