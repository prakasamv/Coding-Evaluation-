import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayReduceComponent } from './array-reduce.component';

describe('ArrayReduceComponent', () => {
  let component: ArrayReduceComponent;
  let fixture: ComponentFixture<ArrayReduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayReduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
