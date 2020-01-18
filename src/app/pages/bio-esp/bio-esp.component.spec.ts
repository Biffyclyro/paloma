import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioEspComponent } from './bio-esp.component';

describe('BioEspComponent', () => {
  let component: BioEspComponent;
  let fixture: ComponentFixture<BioEspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioEspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
