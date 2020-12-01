import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationviewComponent } from './nominationview.component';

describe('NominationviewComponent', () => {
  let component: NominationviewComponent;
  let fixture: ComponentFixture<NominationviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
