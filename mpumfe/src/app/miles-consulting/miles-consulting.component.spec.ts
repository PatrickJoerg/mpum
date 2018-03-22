import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesConsultingComponent } from './miles-consulting.component';

describe('MilesConsultingComponent', () => {
  let component: MilesConsultingComponent;
  let fixture: ComponentFixture<MilesConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
