import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodEntryComponent } from './add-food-entry.component';

describe('AddFoodEntryComponent', () => {
  let component: AddFoodEntryComponent;
  let fixture: ComponentFixture<AddFoodEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFoodEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
