import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountComponent } from './account.component';
import { AccountService, AppService } from '../core/services';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let service: AccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [AccountComponent],
      providers: [
        AppService,
        AccountService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AccountService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call accountService.fetchAccounts on ngOnInit', () => {
    let serviceSpy = spyOn(service, 'fetchAccounts').and.callThrough();
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
  });

});
