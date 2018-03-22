import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesMoreCollectComponent } from './miles-more-collect.component';

describe('MilesMoreCollectComponent', () => {
  let component: MilesMoreCollectComponent;
  let fixture: ComponentFixture<MilesMoreCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesMoreCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesMoreCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
