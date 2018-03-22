import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyCashComponent } from './germany-cash.component';

describe('GermanyCashComponent', () => {
  let component: GermanyCashComponent;
  let fixture: ComponentFixture<GermanyCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanyCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
