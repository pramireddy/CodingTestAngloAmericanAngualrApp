import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

import { AccountService } from './account.service';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

describe('AccountService', () => {
  let service: AccountService;
  let httpTestingController: HttpTestingController;

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
});
