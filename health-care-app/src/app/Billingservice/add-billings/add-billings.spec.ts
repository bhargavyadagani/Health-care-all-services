import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillings } from './add-billings';

describe('AddBillings', () => {
  let component: AddBillings;
  let fixture: ComponentFixture<AddBillings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBillings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBillings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
