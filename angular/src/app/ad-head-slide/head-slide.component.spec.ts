import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSlideComponent } from './head-slide.component';

describe('HeadSlideComponent', () => {
  let component: HeadSlideComponent;
  let fixture: ComponentFixture<HeadSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
