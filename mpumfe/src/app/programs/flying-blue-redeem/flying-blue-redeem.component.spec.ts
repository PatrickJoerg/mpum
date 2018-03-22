import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingBlueRedeemComponent } from './flying-blue-redeem.component';

describe('FlyingBlueRedeemComponent', () => {
  let component: FlyingBlueRedeemComponent;
  let fixture: ComponentFixture<FlyingBlueRedeemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingBlueRedeemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingBlueRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
