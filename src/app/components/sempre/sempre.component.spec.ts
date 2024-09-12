import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SempreComponent } from './sempre.component';

describe('SempreComponent', () => {
  let component: SempreComponent;
  let fixture: ComponentFixture<SempreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SempreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SempreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
