import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsSimplesComponent } from './ts-simples.component';

describe('TsSimplesComponent', () => {
  let component: TsSimplesComponent;
  let fixture: ComponentFixture<TsSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsSimplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TsSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
