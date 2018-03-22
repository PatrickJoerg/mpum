import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingBlueStatusComponent } from './flying-blue-status.component';

describe('FlyingBlueStatusComponent', () => {
  let component: FlyingBlueStatusComponent;
  let fixture: ComponentFixture<FlyingBlueStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingBlueStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingBlueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
