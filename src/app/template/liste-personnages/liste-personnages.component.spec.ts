import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePersonnagesComponent } from './liste-personnages.component';

describe('ListePersonnagesComponent', () => {
  let component: ListePersonnagesComponent;
  let fixture: ComponentFixture<ListePersonnagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePersonnagesComponent]
    });
    fixture = TestBed.createComponent(ListePersonnagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
