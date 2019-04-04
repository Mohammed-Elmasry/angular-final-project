import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameLogoutComponent } from './username-logout.component';

describe('UsernameLogoutComponent', () => {
  let component: UsernameLogoutComponent;
  let fixture: ComponentFixture<UsernameLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
