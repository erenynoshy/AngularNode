import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFootOneComponent } from './slide-foot-one.component';

describe('SlideFootOneComponent', () => {
  let component: SlideFootOneComponent;
  let fixture: ComponentFixture<SlideFootOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFootOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFootOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
