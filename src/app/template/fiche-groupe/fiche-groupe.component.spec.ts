import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheGroupeComponent } from './fiche-groupe.component';

describe('FicheGroupeComponent', () => {
  let component: FicheGroupeComponent;
  let fixture: ComponentFixture<FicheGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheGroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
