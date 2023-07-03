import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanFormComponent } from './add-ban-form.component';

describe('AddBanFormComponent', () => {
  let component: AddBanFormComponent;
  let fixture: ComponentFixture<AddBanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBanFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
