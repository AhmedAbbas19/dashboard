import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsReviewComponent } from './stats-review.component';

describe('StatsReviewComponent', () => {
  let component: StatsReviewComponent;
  let fixture: ComponentFixture<StatsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
