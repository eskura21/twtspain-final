import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwtterComponent } from './twtter.component';

describe('TwtterComponent', () => {
  let component: TwtterComponent;
  let fixture: ComponentFixture<TwtterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwtterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwtterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
