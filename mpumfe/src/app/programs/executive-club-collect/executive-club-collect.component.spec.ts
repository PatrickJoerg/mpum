import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveClubCollectComponent } from './executive-club-collect.component';

describe('ExecutiveClubCollectComponent', () => {
  let component: ExecutiveClubCollectComponent;
  let fixture: ComponentFixture<ExecutiveClubCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveClubCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveClubCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
