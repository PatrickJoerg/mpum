import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveClubStatusComponent } from './executive-club-status.component';

describe('ExecutiveClubStatusComponent', () => {
  let component: ExecutiveClubStatusComponent;
  let fixture: ComponentFixture<ExecutiveClubStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveClubStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveClubStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
