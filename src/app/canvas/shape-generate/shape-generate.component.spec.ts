import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeGenerateComponent } from './shape-generate.component';

describe('ShapeGenerateComponent', () => {
  let component: ShapeGenerateComponent;
  let fixture: ComponentFixture<ShapeGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShapeGenerateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
