import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomAccessComponent } from './dom-access.component';

describe('DomAccessComponent', () => {
  let component: DomAccessComponent;
  let fixture: ComponentFixture<DomAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomAccessComponent]
    });
    fixture = TestBed.createComponent(DomAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
