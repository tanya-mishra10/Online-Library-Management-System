import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsuueBookComponent } from './isuue-book.component';

describe('IsuueBookComponent', () => {
  let component: IsuueBookComponent;
  let fixture: ComponentFixture<IsuueBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsuueBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsuueBookComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
