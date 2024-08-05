import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporttableComponent } from './reporttable.component';

describe('ReporttableComponent', () => {
  let component: ReporttableComponent;
  let fixture: ComponentFixture<ReporttableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporttableComponent]
    });
    fixture = TestBed.createComponent(ReporttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
