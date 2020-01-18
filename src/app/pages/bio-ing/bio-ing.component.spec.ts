import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioIngComponent } from './bio-ing.component';

describe('BioIngComponent', () => {
  let component: BioIngComponent;
  let fixture: ComponentFixture<BioIngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioIngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
