import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFootComponent } from './slide-foot.component';

describe('SlideFootComponent', () => {
  let component: SlideFootComponent;
  let fixture: ComponentFixture<SlideFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
