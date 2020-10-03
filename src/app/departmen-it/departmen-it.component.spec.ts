import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenItComponent } from './departmen-it.component';

describe('DepartmenItComponent', () => {
  let component: DepartmenItComponent;
  let fixture: ComponentFixture<DepartmenItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmenItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmenItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
