import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetObjComponent } from './set-obj.component';

describe('SetObjComponent', () => {
  let component: SetObjComponent;
  let fixture: ComponentFixture<SetObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
