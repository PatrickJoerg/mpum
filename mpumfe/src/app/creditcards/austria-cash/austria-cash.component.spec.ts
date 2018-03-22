import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustriaCashComponent } from './austria-cash.component';

describe('AustriaCashComponent', () => {
  let component: AustriaCashComponent;
  let fixture: ComponentFixture<AustriaCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustriaCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustriaCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
