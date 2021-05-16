import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountTypeComponent } from './account-type.component';
import { AccountService, AppService } from '../core/services';

describe('AccountTypeComponent', () => {
  let component: AccountTypeComponent;
  let fixture: ComponentFixture<AccountTypeComponent>;
  let service: AccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [AccountTypeComponent],
      providers: [
        AppService,
        AccountService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AccountService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call accountService.fetchAccountTypes on ngOnInit', () => {
    let serviceSpy = spyOn(service, 'fetchAccountTypes').and.callThrough();
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
  });

});
