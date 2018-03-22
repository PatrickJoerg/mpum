import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesMoreStatusComponent } from './miles-more-status.component';

describe('MilesMoreStatusComponent', () => {
  let component: MilesMoreStatusComponent;
  let fixture: ComponentFixture<MilesMoreStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesMoreStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesMoreStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
