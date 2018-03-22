import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesMoreRedeemComponent } from './miles-more-redeem.component';

describe('MilesMoreRedeemComponent', () => {
  let component: MilesMoreRedeemComponent;
  let fixture: ComponentFixture<MilesMoreRedeemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesMoreRedeemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesMoreRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
