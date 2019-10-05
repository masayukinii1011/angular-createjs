import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas03Component } from './canvas03.component';

describe('Canvas03Component', () => {
  let component: Canvas03Component;
  let fixture: ComponentFixture<Canvas03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Canvas03Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
