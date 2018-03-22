import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanExpressCollectComponent } from './american-express-collect.component';

describe('AmericanExpressCollectComponent', () => {
  let component: AmericanExpressCollectComponent;
  let fixture: ComponentFixture<AmericanExpressCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanExpressCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanExpressCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
