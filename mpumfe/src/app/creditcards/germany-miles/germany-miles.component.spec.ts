import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyMilesComponent } from './germany-miles.component';

describe('GermanyMilesComponent', () => {
  let component: GermanyMilesComponent;
  let fixture: ComponentFixture<GermanyMilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanyMilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyMilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
