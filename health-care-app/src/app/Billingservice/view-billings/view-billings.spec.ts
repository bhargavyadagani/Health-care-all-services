import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillings } from './view-billings';

describe('ViewBillings', () => {
  let component: ViewBillings;
  let fixture: ComponentFixture<ViewBillings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBillings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBillings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
