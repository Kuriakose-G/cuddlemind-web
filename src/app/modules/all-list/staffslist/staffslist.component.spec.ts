import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffslistComponent } from './staffslist.component';

describe('StaffslistComponent', () => {
  let component: StaffslistComponent;
  let fixture: ComponentFixture<StaffslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
