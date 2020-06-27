import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideHeadComponent } from './slide-head.component';

describe('SlideHeadComponent', () => {
  let component: SlideHeadComponent;
  let fixture: ComponentFixture<SlideHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
