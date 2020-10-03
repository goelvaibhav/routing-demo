import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenManagerComponent } from './departmen-manager.component';

describe('DepartmenManagerComponent', () => {
  let component: DepartmenManagerComponent;
  let fixture: ComponentFixture<DepartmenManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmenManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmenManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
