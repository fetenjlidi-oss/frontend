import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listpatient } from './listpatient';

describe('Listpatient', () => {
  let component: Listpatient;
  let fixture: ComponentFixture<Listpatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listpatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listpatient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
