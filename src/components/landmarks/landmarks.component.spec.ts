import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LANDMARKSComponent } from './landmarks.component';

describe('LANDMARKSComponent', () => {
  let component: LANDMARKSComponent;
  let fixture: ComponentFixture<LANDMARKSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LANDMARKSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LANDMARKSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
