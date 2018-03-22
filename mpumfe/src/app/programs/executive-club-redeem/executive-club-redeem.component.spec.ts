import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveClubRedeemComponent } from './executive-club-redeem.component';

describe('ExecutiveClubRedeemComponent', () => {
  let component: ExecutiveClubRedeemComponent;
  let fixture: ComponentFixture<ExecutiveClubRedeemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveClubRedeemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveClubRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
