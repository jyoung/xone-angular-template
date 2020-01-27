import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSelectorComponent } from './office-selector.component';

describe('OfficeSelectorComponent', () => {
  let component: OfficeSelectorComponent;
  let fixture: ComponentFixture<OfficeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
