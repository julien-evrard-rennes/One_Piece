import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonnagesApiComponent } from './list-personnages-api.component';

describe('ListPersonnagesApiComponent', () => {
  let component: ListPersonnagesApiComponent;
  let fixture: ComponentFixture<ListPersonnagesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPersonnagesApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPersonnagesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
