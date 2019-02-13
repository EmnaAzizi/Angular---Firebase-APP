import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreFormComponent } from './titre-form.component';

describe('TitreFormComponent', () => {
  let component: TitreFormComponent;
  let fixture: ComponentFixture<TitreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
