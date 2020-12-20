import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpoxComponent } from './inpox.component';

describe('InpoxComponent', () => {
  let component: InpoxComponent;
  let fixture: ComponentFixture<InpoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
