import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumbComponent } from './add-numb.component';

describe('AddNumbComponent', () => {
  let component: AddNumbComponent;
  let fixture: ComponentFixture<AddNumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
