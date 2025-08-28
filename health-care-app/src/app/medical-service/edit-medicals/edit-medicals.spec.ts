import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicals } from './edit-medicals';

describe('EditMedicals', () => {
  let component: EditMedicals;
  let fixture: ComponentFixture<EditMedicals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMedicals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMedicals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
