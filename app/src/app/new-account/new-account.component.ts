import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, LoggerService } from '../core/services';
import { AccountRequest } from '../models/accountRequest';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent implements OnInit {

  /* TODO:
 - Save account using the REST Api
  */

  public accountForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private logger: LoggerService,private router: Router) {
  }

  ngOnInit(): void {

    this.accountForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      balance: ['', [Validators.required]]
    });
  }

  public createAccount = (accountFormValue: AccountRequest) => {
    if (this.accountForm.valid) {
      console.log(accountFormValue);
      this.creatNewAlbum(accountFormValue);
    }
  }

  private creatNewAlbum(request: AccountRequest) {
    this.accountService.createAccount(request)
      .subscribe(
        {
          next: (result: any) => {
            // TO DO : Display success - SuccessDialogComponent
            this.router.navigate(['/accounts']);

            console.log(result);
          },
          error: (error: any) => {
            this.logger.error("Failed to creat new account" + error);
            console.log(error);

          },
          complete: () => {
            this.logger.trace("Create new account succcess");
          }
        }
      );
  }

}
