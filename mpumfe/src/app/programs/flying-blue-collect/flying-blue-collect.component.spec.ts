import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingBlueCollectComponent } from './flying-blue-collect.component';

describe('FlyingBlueCollectComponent', () => {
  let component: FlyingBlueCollectComponent;
  let fixture: ComponentFixture<FlyingBlueCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingBlueCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingBlueCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
