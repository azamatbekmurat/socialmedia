import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendAccountComponent } from './friend-account.component';

describe('FriendAccountComponent', () => {
  let component: FriendAccountComponent;
  let fixture: ComponentFixture<FriendAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
