import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPatrickComponent } from './about-patrick.component';

describe('AboutPatrickComponent', () => {
  let component: AboutPatrickComponent;
  let fixture: ComponentFixture<AboutPatrickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPatrickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPatrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
