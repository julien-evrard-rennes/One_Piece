import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGroupeApiComponent } from './liste-groupe-api.component';

describe('ListeGroupeApiComponent', () => {
  let component: ListeGroupeApiComponent;
  let fixture: ComponentFixture<ListeGroupeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeGroupeApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeGroupeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
