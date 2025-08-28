import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicals } from './view-medicals';

describe('ViewMedicals', () => {
  let component: ViewMedicals;
  let fixture: ComponentFixture<ViewMedicals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMedicals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMedicals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
