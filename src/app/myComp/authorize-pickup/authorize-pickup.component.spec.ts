import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizePickupComponent } from './authorize-pickup.component';

describe('AuthorizePickupComponent', () => {
  let component: AuthorizePickupComponent;
  let fixture: ComponentFixture<AuthorizePickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizePickupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizePickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
