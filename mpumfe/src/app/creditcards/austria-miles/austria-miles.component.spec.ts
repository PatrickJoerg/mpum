import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustriaMilesComponent } from './austria-miles.component';

describe('AustriaMilesComponent', () => {
  let component: AustriaMilesComponent;
  let fixture: ComponentFixture<AustriaMilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustriaMilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustriaMilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
