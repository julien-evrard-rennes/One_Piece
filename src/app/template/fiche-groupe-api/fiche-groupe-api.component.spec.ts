import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheGroupeApiComponent } from './fiche-groupe-api.component';

describe('FicheGroupeApiComponent', () => {
  let component: FicheGroupeApiComponent;
  let fixture: ComponentFixture<FicheGroupeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheGroupeApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheGroupeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
