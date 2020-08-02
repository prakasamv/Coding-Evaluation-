import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringFunComponent } from './string-fun.component';

describe('StringFunComponent', () => {
  let component: StringFunComponent;
  let fixture: ComponentFixture<StringFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
