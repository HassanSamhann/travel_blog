import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitRevComponent } from './tit-rev.component';

describe('TitRevComponent', () => {
  let component: TitRevComponent;
  let fixture: ComponentFixture<TitRevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitRevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitRevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
