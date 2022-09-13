import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxUsingGridComponent } from './box-using-grid.component';

describe('BoxUsingGridComponent', () => {
  let component: BoxUsingGridComponent;
  let fixture: ComponentFixture<BoxUsingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxUsingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxUsingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
