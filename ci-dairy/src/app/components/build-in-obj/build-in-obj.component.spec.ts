import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInObjComponent } from './build-in-obj.component';

describe('BuildInObjComponent', () => {
  let component: BuildInObjComponent;
  let fixture: ComponentFixture<BuildInObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildInObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
