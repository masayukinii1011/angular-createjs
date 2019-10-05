import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas04Component } from './canvas04.component';

describe('Canvas04Component', () => {
  let component: Canvas04Component;
  let fixture: ComponentFixture<Canvas04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Canvas04Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
