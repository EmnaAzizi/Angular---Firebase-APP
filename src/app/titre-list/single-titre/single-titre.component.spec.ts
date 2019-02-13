import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTitreComponent } from './single-titre.component';

describe('SingleTitreComponent', () => {
  let component: SingleTitreComponent;
  let fixture: ComponentFixture<SingleTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
