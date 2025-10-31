import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupesApiComponent } from './list-groupes-api.component';

describe('ListGroupesApiComponent', () => {
  let component: ListGroupesApiComponent;
  let fixture: ComponentFixture<ListGroupesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGroupesApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGroupesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
