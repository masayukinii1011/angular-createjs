import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas02Component } from './canvas02.component';

describe('Canvas02Component', () => {
  let component: Canvas02Component;
  let fixture: ComponentFixture<Canvas02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Canvas02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
