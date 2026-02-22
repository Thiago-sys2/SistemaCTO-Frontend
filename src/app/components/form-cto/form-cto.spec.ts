import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCto } from './form-cto';

describe('FormCto', () => {
  let component: FormCto;
  let fixture: ComponentFixture<FormCto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
