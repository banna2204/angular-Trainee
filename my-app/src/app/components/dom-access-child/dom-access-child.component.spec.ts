import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomAccessChildComponent } from './dom-access-child.component';

describe('DomAccessChildComponent', () => {
  let component: DomAccessChildComponent;
  let fixture: ComponentFixture<DomAccessChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomAccessChildComponent]
    });
    fixture = TestBed.createComponent(DomAccessChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
