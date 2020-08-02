import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFunComponent } from './array-fun.component';

describe('ArrayFunComponent', () => {
  let component: ArrayFunComponent;
  let fixture: ComponentFixture<ArrayFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
