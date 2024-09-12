import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgpComponent } from './sgp.component';

describe('SgpComponent', () => {
  let component: SgpComponent;
  let fixture: ComponentFixture<SgpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SgpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SgpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
