import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopsoverPage } from './popsover.page';

describe('PopsoverPage', () => {
  let component: PopsoverPage;
  let fixture: ComponentFixture<PopsoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopsoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopsoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
