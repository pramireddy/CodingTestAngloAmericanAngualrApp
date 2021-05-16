import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AccountModel } from '../../account/account.model';

import { AccountService } from './account.service';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';
import { AccountTypeModel } from 'src/app/account-type/account-type.model';

describe('AccountService', () => {
  let service: AccountService;
  let httpTestingController: HttpTestingController;

  const accountTypeTestData: AccountTypeModel[] = [
    {
      "id": 1,
      "name": "Bronze"
    },
    {
      "id": 2,
      "name": "Silver"
    },
    {
      "id": 3,
      "name": "Gold"
    }
  ]

  const accountsTestData: AccountModel[] = [
    {
      "firstName": "Ruby",
      "lastName": "Curtis",
      "typeId": 1,
      "balance": 300,
      "address": "Winchester A84 2RS"
    },
    {
      "firstName": "Carolyn",
      "lastName": "Hicks",
      "typeId": 1,
      "balance": 1400,
      "address": "Plymouth I7T 5XD"
    },
    {
      "firstName": "Elijah",
      "lastName": "Johnston",
      "typeId": 1,
      "balance": 5000,
      "address": "Kingston upon Hull H4E 0XL"
    },
    {
      "firstName": "Kirk",
      "lastName": "Gibson",
      "typeId": 2,
      "balance": 7100,
      "address": "Londonderry G44 5HX"
    },
    {
      "firstName": "Jessie",
      "lastName": "Castro",
      "typeId": 2,
      "balance": 10000,
      "address": "Coventry GV4Y 9ZA"
    },
    {
      "firstName": "Anne",
      "lastName": "Sanchez",
      "typeId": 1,
      "balance": 4900,
      "address": "Durham JN28 3NG"
    },
    {
      "firstName": "Rene",
      "lastName": "Knight",
      "typeId": 2,
      "balance": 5555,
      "address": "Cardiff P2 5RZ"
    },
    {
      "firstName": "Test",
      "lastName": "Test",
      "typeId": 3,
      "balance": 432432424,
      "address": "Westminster KS6K 2FS"
    },
    {
      "firstName": "Test",
      "lastName": "Test1",
      "typeId": 3,
      "balance": 543545435,
      "address": "Stirling X93 4WD"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        AccountService
      ]
    });
    service = TestBed.inject(AccountService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should fetch the accounts", () => {
    service.fetchAccounts().subscribe({
      next: (response) => {
        expect(response).not.toBeNull();
        expect(response.length).toBe(9)
      },
    });
    let request = httpTestingController.expectOne('https://localhost:44329/accounts');
    request.flush(accountsTestData);
  });

  it("should fetch the accounttypes", () => {
    service.fetchAccountTypes().subscribe({
      next: (response) => {
        expect(response).not.toBeNull();
        expect(response.length).toBe(3)
      },
    });
    let request = httpTestingController.expectOne('https://localhost:44329/accounttype');
    request.flush(accountTypeTestData);
  });

});
