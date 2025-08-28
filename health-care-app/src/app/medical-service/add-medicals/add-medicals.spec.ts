import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicals } from './add-medicals';

describe('AddMedicals', () => {
  let component: AddMedicals;
  let fixture: ComponentFixture<AddMedicals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMedicals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedicals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
