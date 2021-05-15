import { Component, OnInit } from '@angular/core';
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

  constructor(private accountService: AccountService, private logger: LoggerService) {
  }

  public accountTypes: AccountTypeModel[];

  ngOnInit(): void {
    this.loadAccountTypes();
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
