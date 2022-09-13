import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxUsingFlexComponent } from './box-using-flex.component';

describe('BoxUsingFlexComponent', () => {
  let component: BoxUsingFlexComponent;
  let fixture: ComponentFixture<BoxUsingFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxUsingFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxUsingFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
