import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreListComponent } from './titre-list.component';

describe('TitreListComponent', () => {
  let component: TitreListComponent;
  let fixture: ComponentFixture<TitreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
